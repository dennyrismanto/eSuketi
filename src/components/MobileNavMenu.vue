<template>
  <div class="mobile-navigation">
    <nav class="offcanvas-navigation" id="offcanvas-navigation">
      <ul>
        <li class="menu-item-has-children">
          <router-link to="/">Home</router-link>
          <ul class="sub-menu">
            <li>
              <router-link to="/">Home One</router-link>
            </li>
            <li>
              <router-link to="/home-two">Home Two</router-link>
            </li>
            <li>
              <router-link to="/home-three">Home Three</router-link>
            </li>
          </ul>
        </li>
        <li>
          <router-link to="/about">ABOUT</router-link>
        </li>
        <li class="menu-item-has-children">
          <router-link to="/service">SERVICE</router-link>
          <ul class="sub-menu">
            <li>
              <router-link to="/service">Service</router-link>
            </li>
            <li>
              <router-link to="/service-details">Service Details</router-link>
            </li>
            <li>
              <router-link to="/service-details-right"
                >Service Details Right Sidebar</router-link
              >
            </li>
          </ul>
        </li>
        <li class="menu-item-has-children">
          <router-link to="/project">PROJECT</router-link>
          <ul class="sub-menu">
            <li>
              <router-link to="/project">Project</router-link>
            </li>
            <li>
              <router-link to="/project-details">Project Details</router-link>
            </li>
          </ul>
        </li>
        <li class="menu-item-has-children">
          <router-link to="/blog-left-sidebar">BLOG</router-link>
          <ul class="sub-menu">
            <li>
              <router-link to="/blog-left-sidebar"
                >Blog Left Sidebar</router-link
              >
            </li>
            <li>
              <router-link to="/blog-right-sidebar"
                >Blog Right Sidebar</router-link
              >
            </li>
            <li>
              <router-link to="/blog-details">Blog Details</router-link>
            </li>
            <li>
              <router-link to="/blog-details-right-sidebar"
                >Blog Details Right Sidebar</router-link
              >
            </li>
          </ul>
        </li>
        <li>
          <router-link to="/contact">CONTACT</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "MobileNavMenu",
  mounted() {
    const offCanvasNav = document.querySelector("#offcanvas-navigation");
    const offCanvasNavSubMenu = offCanvasNav.querySelectorAll(".sub-menu");
    const anchorLinks = offCanvasNav.querySelectorAll("a");

    for (let i = 0; i < offCanvasNavSubMenu.length; i++) {
      offCanvasNavSubMenu[i].insertAdjacentHTML(
        "beforebegin",
        "<span class='menu-expand'><i></i></span>"
      );
    }

    const menuExpand = offCanvasNav.querySelectorAll(".menu-expand");
    const numMenuExpand = menuExpand.length;

    for (let i = 0; i < numMenuExpand; i++) {
      menuExpand[i].addEventListener("click", (e) => {
        sideMenuExpand(e);
      });
    }

    for (let i = 0; i < anchorLinks.length; i++) {
      anchorLinks[i].addEventListener("click", () => {
        closeMobileMenu();
      });
    }

    const sideMenuExpand = (e) => {
      e.currentTarget.parentElement.classList.toggle("active");
    };
    const closeMobileMenu = () => {
      const offcanvasMobileMenu = document.querySelector(
        "#offcanvas-mobile-menu"
      );
      offcanvasMobileMenu?.classList.remove("active");
    };
  },
};
</script>

<style lang="scss">
@import "./assets/scss/0-base/_variables.scss";

/* offcanvas mobile menu */
.mobile-navigation {
  padding: 30px 20px;
}
.offcanvas-navigation {
  & > ul {
    li {
      &.menu-item-has-children {
        .sub-menu {
          height: 0;
          visibility: hidden;
          opacity: 0;
          transition: 0.3s;
        }
        &.active {
          & > .sub-menu {
            height: 100%;
            visibility: visible;
            opacity: 1;
          }
        }
      }
      & > a {
        color: $white;
        font-size: 14px;
        padding: 10px 0;
        display: block;
        &:hover {
          color: $white;
        }
      }
    }
  }

  ul {
    &.sub-menu {
      margin-left: 25px;
      transition: 0.3s;
      & > li {
        & > a {
          color: $white;
          font-size: 13px;
          padding: 5px 0;
          &:hover {
            color: $white;
          }
        }
      }
    }
    li {
      a {
        text-transform: uppercase;
      }

      &.menu-item-has-children {
        position: relative;
        display: block;
        a {
          display: block;
        }

        &.active {
          & > .menu-expand {
            i {
              &:before {
                transform: rotate(0);
              }
            }
          }
        }

        .menu-expand {
          position: absolute;
          right: auto;
          left: 95%;
          top: -5px;
          width: 30px;
          height: 50px;
          line-height: 50px;
          cursor: pointer;
          text-align: center;

          i {
            display: block;
            margin-top: 27px;
            border-bottom: 1px solid $white;
            position: relative;
            width: 10px;
            transition: all 250ms ease-out;
            &:before {
              width: 100%;
              content: "";
              border-bottom: 1px solid $white;
              display: block;
              position: absolute;
              top: 0;
              transform: rotate(90deg);
            }
          }
        }
      }
    }
  }
}
</style>
