import styled from 'styled-components';
import { makeStyles } from '@material-ui/styles';
import { Link } from 'react-router-dom';

import { color } from 'shared/utils/styles';

const navBarHeight = "3em";

export const AuthLink = styled(Link)`
color: #deebff;
text-decoration: none;
font-family: $code;
transition: all 0.25s ease 0s;
padding: 0.25rem;
display: inline-block;

&:hover {
  transform: translateY(-2.5px);
  transition: all 0.25s ease 0s;
  cursor: pointer;
}
`

export const useStyles = makeStyles(() => ({
  root: {
    boxShadow: 'none',
    height: `${navBarHeight}`,
    background: `${color.backgroundDarkPrimary}`,
    marginBottom: '1rem',
  },
  flexGrow: {
    flexGrow: 1
  },
  brandHeader: {
    marginRight: '3rem',
    marginBottom: '1rem',
    fontWeight: '500',
    fontFamily: '$code',
    fontSize: '1rem',
    textTransform: 'uppercase',
    letterSpacing: '0.4rem',
    userSelect: 'none',
    color: '#deebff',
  },
  authItemContainer: {
    display: 'flex',
    alignItems: 'center'
  },
  authItem: {
    marginBottom: '1rem',
  },
  routeItem: {
    marginBottom: '1rem',
    marginRight: '2rem'
  },
  profile: {
    marginRight:'1rem'
  }
}));



// export const NavBar = styled.div`
// .top-nav {
//   display: flex;
//   justify-content: space-between;
//   height: ${navBarHeight};
//   border-bottom: 2px solid $lighterGray;
//   background: ${color.backgroundDarkPrimary};   
//   position: fixed;
//   width: 100%;
//   min-width: 1100px;
//   z-index: 1000;
// }

// /* Left side of nav */
// .left-top {
//   margin-left: 2rem;
//   display: flex;
//   align-items: center;

//     &:hover {
//       cursor: pointer;
//     }
//   }

//   .brand-header {
//     margin-left: 2rem;
//     font-weight: 500;
//     font-family: $code;
//     font-size: 1rem;
//     text-transform: uppercase;
//     letter-spacing: 0.5rem;
//     user-select: none;
//     color: #deebff;
//   }

//   .brand-header-sub {
//     font-size: 0.5rem;
//   }
// }

// /* Right side of nav */
// .right-top {
//   display: flex;
//   align-items: center;
//   margin-right: 10px;
//   transition: all 0.25s ease 0s;

//   .email {
//     font-size: 10px;
//     margin-right: 1rem;
//     color: #deebff;
//     text-align: right;
//     line-height: 0.5rem;
//   }

//   .auth-route {
//     background-color: $lighterGray;
//     color: #deebff;
//     text-decoration: none;
//     font-family: $code;
//     transition: all 0.25s ease 0s;
//     padding: 0.25rem;
//     display: inline-block;

//     &:hover {
//       transform: translateY(-2.5px);
//       transition: all 0.25s ease 0s;
//       cursor: pointer;
//     }
//   }

//   .profile {
//     height: 15px;
//     width: 15px;
//     padding: 1.25rem;
//     font-size: 12px;
//     background-color: $red;
//     color: $white;
//     margin-right: 2rem;
//     display: inline-block;
//     user-select: none;
//     transition: all 0.25s ease 0s;

//     &:hover {
//       opacity: 0.9;
//       cursor: pointer;
//       transition: all 0.25s ease 0s;
//     }
//   }

//   .dropdown {
//     position: absolute;
//     display: flex;
//     flex-direction: column;
//     border: 1px solid $gray;
//     background-color: $white;
//     padding: 1rem;
//     transform: translate(-9rem, 1.5rem);

//     p {
//       width: 140px;
//       color: $darkGray;
//       padding-left: 1rem;
//       padding-right: 1rem;
//       font-size: 12px;
//     }

//     li {
//       width: 140px;
//       padding: 1rem;
//       color: $black;
//       background-color: $white;
//       transition: all 0.25s ease 0s;
//       font-size: 14px;

//       &:hover {
//         cursor: pointer;
//         color: $primaryBlue;
//         background-color: $lighterGray;
//         transition: all 0.25s ease 0s;
//       }
//     }
//   }
// }

// .right-top-visibile {
//   margin-right: 0px;
//   transition: all 0.25s ease 0s;
// }
// `;
