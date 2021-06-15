import { AnyProps } from '@wheelroom/any/any'
import { A, Span } from '@wheelroom/any/elements'
import { Link } from 'gatsby'
import { css } from '@emotion/css'
import { useGlobals } from '../../lib/globals-provider'
import { mediaQuery } from '../../lib/media-query'
import { Icon } from '../icon/icon'
import { ContentfulEmbed } from '../embed/contentful-embed'
import { ContentfulAction } from './contentful-action'

export type Action = {
  contentfulAction?: ContentfulAction
}
export type ActionVariant = 'primary' | 'secondary' | 'display' | 'link'
export type ActionOption = 'hideIcon' | 'hideHeading'
export type ActionOptions = Partial<Record<ActionOption, boolean>>

type AnyAProps = AnyProps['a']
export interface ActionProps extends AnyAProps {
  model?: Action
  options?: ActionOptions
  variant?: ActionVariant
}

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
  backgroundColor: 'var(--colors-azure)',
  borderColor: 'var(--colors-azure)',
  transition: 'background-color .25s ease',
  ':hover, :focus': {
    backgroundColor: 'var(--colors-ocean)',
  },
}

const styleMap: Partial<Record<ActionVariant, any>> = {
  primary: primaryStyle,
  secondary: {
    ...baseStyle,
    color: 'black',
    backgroundColor: 'white',
    borderColor: 'var(--colors-azure)',
    transition: 'border-color .25s ease',
    ':hover, :focus': {
      borderColor: 'var(--colors-ocean)',
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
  action: ContentfulAction
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
  siteEmbeds.forEach((embed: ContentfulEmbed) => {
    if (embed.code && embed.type === 'js-action') {
      Function('eventId', 'props', embed.code)(eventId, globals)
    }
  })
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
  const action = model.contentfulAction || {}

  const heading = children ? children : action.heading
  const linkProps = { ...props } as typeof Link
  return (
    <Link
      className={css(actionStyleFactory({ options, variant }))}
      aria-label={action.description}
      onClick={() => onClickHander({ eventId: action.eventId, globals })}
      to={createURL({
        action,
        isPreviewMode: globals.isPreviewMode,
        url: action.page?.path || '',
      })}
      {...linkProps}
    >
      {!options?.hideHeading && heading}
      {action.icon && !options?.hideIcon && <Icon variant={action.icon} />}
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
  const action = model.contentfulAction || {}
  const heading = children ? children : action.heading
  return (
    <A
      css={css}
      aria-label={action.description}
      href={createURL({
        action,
        isPreviewMode: globals.isPreviewMode,
        url: action.url || '',
      })}
      onClick={() => onClickHander({ eventId: action.eventId, globals })}
      {...props}
    >
      {!options?.hideHeading && heading}
      {action.icon && !options?.hideIcon && <Icon variant={action.icon} />}
    </A>
  )
}

const NoLink = ({ model, children, options, ...props }: ActionProps) => {
  model = model || {}
  const action = model.contentfulAction || {}
  const heading = children ? children : action.heading
  return (
    <Span aria-label={action.description} {...props}>
      {!options?.hideHeading && heading}
      {action.icon && !options?.hideIcon && <Icon variant={action.icon} />}
    </Span>
  )
}

export const Action = (props: ActionProps) => {
  const action = props.model?.contentfulAction || {}
  if (action.page) {
    return <ActionGlink {...props} />
  } else if (action.url) {
    return <ActionAlink {...props} />
  } else {
    return <NoLink {...props} />
  }
}
