import { AnyProps } from '@wheelroom/any/any'
import { A, Span } from '@wheelroom/any/elements'
import { graphql, Link } from 'gatsby'
import { css } from '@emotion/css'
import { Alarm } from 'react-bootstrap-icons'
import { Embed } from '../media/embed'
import { useGlobals } from '../../lib/globals-provider'
import { Page } from '../page/page'
import { mediaQuery } from '../../lib/media-query'

export type Action = {
  sys?: {
    id: string
  }
  anchor?: string
  description?: string
  eventId?: string
  heading?: string
  icon?: string
  page?: Page
  query?: string
  url?: string
}
export type ActionVariant = 'primary' | 'secondary' | 'display' | 'link'
export type ActionOption = 'hideIcon' | 'hideHeading'
export type ActionOptions = Partial<Record<ActionOption, boolean>>

const baseStyle = {
  display: 'inline-flex',
  justifyContent: 'center',
  fontSize: '16px',
  padding: '8px 16px',
  userSelect: 'none',
  borderWidth: '1px',
  borderStyle: 'solid',
  borderRadius: '4px',
  borderColor: 'transparent',
  textDecoration: 'none',
  ':focus': {
    outlineColor: 'outline',
  },
  svg: {
    width: '15px',
    height: '15px',
    margin: '0 auto',
    transform: 'translateX(4px)',
  },
}

const primaryStyle = {
  ...baseStyle,
  color: 'white',
  backgroundColor: 'blue',
  borderColor: 'black',
  transition: 'background-color .25s ease',
  ':hover, :focus': {
    backgroundColor: 'darkblue',
  },
}

const styleMap: Partial<Record<ActionVariant, any>> = {
  primary: primaryStyle,
  secondary: {
    ...baseStyle,
    color: 'white',
    backgroundColor: 'red',
    borderColor: 'black',
    transition: 'border-color .25s ease',
    ':hover, :focus': {
      borderColor: 'darkred',
    },
  },
  display: {
    ...primaryStyle,
    fontSize: ['18px', '18px', '20px'],
    padding: ['16px 24px', '16px 24px', '16px 32px'],
  },
  link: {
    ...baseStyle,
    fontSize: '18px',
    backgroundColor: 'transparent',
    color: 'blue',
    border: '0',
    padding: 0,
    textDecoration: 'underline',
  },
}

export const actionStyleFactory = (args: {
  variant?: ActionVariant
  options?: any
}) => {
  const useVariant = args.variant || 'primary'
  const baseStyle = styleMap[useVariant]
  return mediaQuery([baseStyle])
}

interface CreateURL {
  action: Action
  isPreviewMode: boolean
  url: string
}

const createURL = ({ url, action, isPreviewMode }: CreateURL) => {
  const hasQuery = action.query || isPreviewMode
  if (hasQuery) {
    url += '?'
    url += isPreviewMode ? '&preview=true' : ''
    url += action.query || ''
  }
  url += action.anchor ? '#' + action.anchor : ''
  return url
}

interface OnClickHander {
  eventId: string | undefined
  globals: any
}

const onClickHander = ({ eventId, globals }: OnClickHander) => {
  const siteEmbeds = globals.siteEmbeds || []
  siteEmbeds.forEach((embed: Embed) => {
    if (embed.code && embed.type === 'js-action') {
      Function('eventId', 'props', embed.code)(eventId, globals)
    }
  })
}

type AnyAProps = AnyProps['a']
export interface ActionProps extends AnyAProps {
  model?: Action
  options?: ActionOptions
  variant?: ActionVariant
}

const ActionGlink = ({
  model,
  children,
  options,
  variant,
  ...props
}: ActionProps) => {
  const globals: any = useGlobals()
  model = model || {}

  const heading = children ? children : model.heading
  const linkProps = { ...props } as typeof Link
  return (
    <Link
      className={css(actionStyleFactory({ options, variant }))}
      aria-label={model?.description}
      onClick={() => onClickHander({ eventId: model?.eventId, globals })}
      to={createURL({
        action: model,
        isPreviewMode: globals.isPreviewMode,
        url: model.page?.path || '',
      })}
      {...linkProps}
    >
      {!options?.hideHeading && heading}
      {model.icon && !options?.hideIcon && <Alarm />}
    </Link>
  )
}

const ActionAlink = ({
  model,
  children,
  options,
  variant,
  ...props
}: ActionProps) => {
  const globals: any = useGlobals()
  const css: any = actionStyleFactory({ options, variant })
  model = model || {}
  const heading = children ? children : model?.heading
  return (
    <A
      css={css}
      aria-label={model?.description}
      href={createURL({
        action: model,
        isPreviewMode: globals.isPreviewMode,
        url: model.url || '',
      })}
      onClick={() => onClickHander({ eventId: model?.eventId, globals })}
      {...props}
    >
      {!options?.hideHeading && heading}
      {model?.icon && !options?.hideIcon && <Alarm />}
    </A>
  )
}

const NoLink = ({ model, children, options, ...props }: ActionProps) => {
  model = model || {}
  const heading = children ? children : model?.heading
  return (
    <Span aria-label={model?.description} {...props}>
      {!options?.hideHeading && heading}
      {model?.icon && !options?.hideIcon && <Alarm />}
    </Span>
  )
}

export const Action = (props: ActionProps) => {
  if (props.model?.page) {
    return <ActionGlink {...props} />
  } else if (props.model?.url) {
    return <ActionAlink {...props} />
  } else {
    return <NoLink {...props} />
  }
}

export const actionFragment = graphql`
  fragment Action on Contentful_Action {
    sys {
      id
    }
    description
    anchor
    eventId
    heading
    icon
    page {
      path
    }
    query
    url
  }
`
