// /* eslint-disable prettier/prettier */
// /**
//  * Graphql fragment definition
//  *
//  * These fragments define the component fields. Gatsby resolves this file
//  * by scanning the src folder, then adds the fragments to the main page query.
//  *
//  *
//  * Component: mediaBreakpoint
//  */

// import { graphql } from 'gatsby'

// export const fragment = graphql`
//   fragment MediaBreakpoint on ContentfulMediaBreakpoint {
//     __typename
//     small {
//       title
//       description
//       file {
//         url
//         fileName
//         contentType
//         details {
//           image {
//             height
//             width
//           }
//         }
//       }
//     }
//     medium {
//       title
//       description
//       file {
//         url
//         fileName
//         contentType
//         details {
//           image {
//             height
//             width
//           }
//         }
//       }
//     }
//     large {
//       title
//       description
//       file {
//         url
//         fileName
//         contentType
//         details {
//           image {
//             height
//             width
//           }
//         }
//       }
//     }
//     extraLarge {
//       title
//       description
//       file {
//         url
//         fileName
//         contentType
//         details {
//           image {
//             height
//             width
//           }
//         }
//       }
//     }
//   }
// `
