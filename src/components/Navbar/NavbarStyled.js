import styled from "styled-components";

const NavbarStyled = styled.nav`
  background: var(--primary);

  .logo > img {
    vertical-align: middle;
    width: 50px;
    height: 50px;
  }
  .logo > span {
    vertical-align: middle;
    margin: 0 10px;
  }

  :after {
    content: "";
    clear: both;
    display: table;
  }
  .logo {
    align-items: center;
    float: left;
    color: white;
    font-size: 27px;
    font-weight: 600;
    line-height: 70px;
    padding-left: 60px;
  }
  ul {
    float: right;
    margin-right: 40px;
    list-style: none;
    position: relative;
  }
  ul li {
    float: left;
    display: inline-block;
    background: var(--primary);
    margin: 0 5px;
  }
  ul li a {
    color: white;
    line-height: 70px;
    text-decoration: none;
    font-size: 18px;
    padding: 8px 15px;
    border: 1px solid transparent;
  }
  ul li a:hover {
    color: #eeedff;
    border-radius: 5px;
    border: 1px solid #eeedff;
  }
  ul ul li a:hover {
    box-shadow: none;
  }

  .dropdown-item:hover {
    border: none;
  }

  ul ul {
    position: absolute;
    top: 90px;
    border-top: 3px solid #b0ceff;
    opacity: 0;
    visibility: hidden;
    transition: top 0.3s;
  }
  ul ul ul {
    border-top: none;
  }
  ul li:hover > ul {
    top: 70px;
    opacity: 1;
    visibility: visible;
  }
  ul ul li {
    position: relative;
    margin: 0px;
    width: 150px;
    float: none;
    display: list-item;
    border-bottom: 1px solid rgba(0, 0, 0, 0.3);
    &:hover {
    }
  }
  label span {
    margin-right: 5px;
  }
  ul ul li a {
    line-height: 50px;
  }
  ul ul ul li {
    position: relative;
    top: -60px;
    left: 150px;
  }
  .show,
  .icon,
  input {
    display: none;
  }
  .fa-plus {
    font-size: 15px;
    margin-left: 40px;
  }
  @media all and (max-width: 968px) {
    ul {
      margin-right: 0px;
      float: left;
    }
    .logo {
      padding-left: 30px;
      width: 100%;
    }
    .show + a,
    ul {
      display: none;
    }
    ul li,
    ul ul li {
      display: block;
      width: 100%;
    }
    ul li a:hover {
      box-shadow: none;
    }
    .show {
      display: block;
      color: white;
      font-size: 18px;
      margin: 0 5px;
      padding: 0 10px;
      line-height: 70px;
      cursor: pointer;
    }

    .icon {
      display: block;
      color: white;
      position: absolute;
      top: 0;
      right: 40px;
      line-height: 70px;
      cursor: pointer;
      font-size: 25px;
    }
    ul ul {
      top: 70px;
      border-top: 0px;
      float: none;
      position: static;
      display: none;
      opacity: 1;
      visibility: visible;
    }
    ul ul a {
      padding-left: 40px;
    }
    ul ul ul a {
      padding-left: 80px;
    }
    ul ul ul li {
      position: static;
    }
    [id^="btn"]:checked + ul {
      display: block;
    }
    ul ul li {
      border-bottom: 0px;
    }
    span.cancel:before {
      content: "\f00d";
    }
  }
  .content {
    z-index: -1;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
  }
  header {
    font-size: 35px;
    font-weight: 600;
    padding: 10px 0;
  }
  p {
    font-size: 30px;
    font-weight: 500;
  }
`;

export default NavbarStyled;
