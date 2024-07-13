import React from 'react';
import { Dropdown, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {
  FaUser,
  FaEnvelope,
  FaSignOutAlt,
  FaTachometerAlt,
  FaCog,
  FaChartBar,
  FaStar,
  FaHeart,
  FaWpforms,
  FaTable,
  FaFileAlt,
  FaPrint,
  FaLock,
  FaExclamationTriangle
} from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="dlabnav">
      <div className="dlabnav-scroll">
        <ul className="metismenu" id="menu">
          <li className="dropdown header-profile">
            <Dropdown>
              <Dropdown.Toggle as="a" className="nav-link" href="javascript:void(0);">
                <img src="images/profile/pic1.jpg" width="20" alt="" />
                <div className="header-info ms-3">
                  <span className="font-w600 ">Hi,<b>William</b></span>
                  <small className="text-end font-w400">william@gmail.com</small>
                </div>
              </Dropdown.Toggle>
              <Dropdown.Menu align="end">
                <Dropdown.Item as={Link} to="app-profile.html">
                  <FaUser className="text-primary" /> Profile
                </Dropdown.Item>
                <Dropdown.Item as={Link} to="email-inbox.html">
                  <FaEnvelope className="text-success" /> Inbox
                </Dropdown.Item>
                <Dropdown.Item as={Link} to="page-login.html">
                  <FaSignOutAlt className="text-danger" /> Logout
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </li>

          <li>
            <Nav.Link as={Link} to="#" className="has-arrow ai-icon">
              <FaTachometerAlt />
              <span className="nav-text">Dashboard</span>
            </Nav.Link>
            <ul aria-expanded="false">
              <li><Nav.Link as={Link} to="index.html">Dashboard Light</Nav.Link></li>
              <li><Nav.Link as={Link} to="index-2.html">Dashboard Dark</Nav.Link></li>
              <li><Nav.Link as={Link} to="index-3.html">Dashboard 3<span className="badge badge-xs badge-danger ms-3">New</span></Nav.Link></li>
              <li><Nav.Link as={Link} to="index-4.html">Dashboard 4<span className="badge badge-xs badge-danger ms-3">New</span></Nav.Link></li>
              <li><Nav.Link as={Link} to="index-5.html">Dashboard 5<span className="badge badge-xs badge-danger ms-3">New</span></Nav.Link></li>
              <li><Nav.Link as={Link} to="index-6.html">Dashboard 6<span className="badge badge-xs badge-danger ms-3">New</span></Nav.Link></li>
              {/* <li><Nav.Link as={Link} to="index-7.html">Dashboard 7<span className="badge badge-xs badge-danger ms-3">New</Nav.Link></li> */}
              <li><Nav.Link as={Link} to="index-8.html">Dashboard 8<span className="badge badge-xs badge-danger ms-3">New</span></Nav.Link></li>
              <li><Nav.Link as={Link} to="my-wallet.html">My Wallet</Nav.Link></li>
              <li><Nav.Link as={Link} to="page-invoices.html">Invoices</Nav.Link></li>
              <li><Nav.Link as={Link} to="cards-center.html">Cards Center</Nav.Link></li>
              <li><Nav.Link as={Link} to="page-transaction.html">Transaction</Nav.Link></li>
              <li><Nav.Link as={Link} to="transaction-details.html">Transaction Details</Nav.Link></li>
            </ul>
          </li>

          <li>
            <Nav.Link as={Link} to="#" className="has-arrow ai-icon">
              <FaCog />
              <span className="nav-text">CMS</span>
            </Nav.Link>
            <ul aria-expanded="false">
              <li><Nav.Link as={Link} to="content.html">Content</Nav.Link></li>
              <li><Nav.Link as={Link} to="menu.html">Menu</Nav.Link></li>
              <li><Nav.Link as={Link} to="email-template.html">Email Template</Nav.Link></li>
              <li><Nav.Link as={Link} to="blog.html">Blog</Nav.Link></li>
            </ul>
          </li>

          <li>
            <Nav.Link as={Link} to="#" className="has-arrow ai-icon">
              <FaHeart />
              <span className="nav-text">Apps</span>
            </Nav.Link>
            <ul aria-expanded="false">
              <li><Nav.Link as={Link} to="app-profile.html">Profile</Nav.Link></li>
              <li><Nav.Link as={Link} to="post-details.html">Post Details</Nav.Link></li>
              <li>
                <Nav.Link as={Link} to="#" className="has-arrow">Email</Nav.Link>
                <ul aria-expanded="false">
                  <li><Nav.Link as={Link} to="email-compose.html">Compose</Nav.Link></li>
                  <li><Nav.Link as={Link} to="email-inbox.html">Inbox</Nav.Link></li>
                  <li><Nav.Link as={Link} to="email-read.html">Read</Nav.Link></li>
                </ul>
              </li>
              <li><Nav.Link as={Link} to="app-calender.html">Calendar</Nav.Link></li>
              <li>
                <Nav.Link as={Link} to="#" className="has-arrow">Shop</Nav.Link>
                <ul aria-expanded="false">
                  <li><Nav.Link as={Link} to="ecom-product-grid.html">Product Grid</Nav.Link></li>
                  <li><Nav.Link as={Link} to="ecom-product-list.html">Product List</Nav.Link></li>
                  <li><Nav.Link as={Link} to="ecom-product-detail.html">Product Details</Nav.Link></li>
                  <li><Nav.Link as={Link} to="ecom-product-order.html">Order</Nav.Link></li>
                  <li><Nav.Link as={Link} to="ecom-checkout.html">Checkout</Nav.Link></li>
                  <li><Nav.Link as={Link} to="ecom-invoice.html">Invoice</Nav.Link></li>
                  <li><Nav.Link as={Link} to="ecom-customers.html">Customers</Nav.Link></li>
                </ul>
              </li>
            </ul>
          </li>

          <li>
            <Nav.Link as={Link} to="#" className="has-arrow ai-icon">
              <FaChartBar />
              <span className="nav-text">Charts</span>
            </Nav.Link>
            <ul aria-expanded="false">
              <li><Nav.Link as={Link} to="chart-flot.html">Flot</Nav.Link></li>
              <li><Nav.Link as={Link} to="chart-morris.html">Morris</Nav.Link></li>
              <li><Nav.Link as={Link} to="chart-chartjs.html">Chartjs</Nav.Link></li>
              <li><Nav.Link as={Link} to="chart-chartist.html">Chartist</Nav.Link></li>
              <li><Nav.Link as={Link} to="chart-sparkline.html">Sparkline</Nav.Link></li>
              <li><Nav.Link as={Link} to="chart-peity.html">Peity</Nav.Link></li>
            </ul>
          </li>

          <li>
            <Nav.Link as={Link} to="#" className="has-arrow ai-icon">
              <FaStar />
              <span className="nav-text">Bootstrap</span>
            </Nav.Link>
            <ul aria-expanded="false">
              <li><Nav.Link as={Link} to="ui-accordion.html">Accordion</Nav.Link></li>
              <li><Nav.Link as={Link} to="ui-alert.html">Alert</Nav.Link></li>
              <li><Nav.Link as={Link} to="ui-badge.html">Badge</Nav.Link></li>
              <li><Nav.Link as={Link} to="ui-button.html">Button</Nav.Link></li>
              <li><Nav.Link as={Link} to="ui-modal.html">Modal</Nav.Link></li>
              <li><Nav.Link as={Link} to="ui-button-group.html">Button Group</Nav.Link></li>
              <li><Nav.Link as={Link} to="ui-list-group.html">List Group</Nav.Link></li>
              <li><Nav.Link as={Link} to="ui-card.html">Cards</Nav.Link></li>
              <li><Nav.Link as={Link} to="ui-carousel.html">Carousel</Nav.Link></li>
              <li><Nav.Link as={Link} to="ui-dropdown.html">Dropdown</Nav.Link></li>
              <li><Nav.Link as={Link} to="ui-popover.html">Popover</Nav.Link></li>
              <li><Nav.Link as={Link} to="ui-progressbar.html">Progressbar</Nav.Link></li>
              <li><Nav.Link as={Link} to="ui-tab.html">Tab</Nav.Link></li>
              <li><Nav.Link as={Link} to="ui-typography.html">Typography</Nav.Link></li>
              <li><Nav.Link as={Link} to="ui-pagination.html">Pagination</Nav.Link></li>
              <li><Nav.Link as={Link} to="ui-grid.html">Grid</Nav.Link></li>
            </ul>
          </li>

          <li>
            <Nav.Link as={Link} to="#" className="has-arrow ai-icon">
              <FaWpforms />
              <span className="nav-text">Forms</span>
            </Nav.Link>
            <ul aria-expanded="false">
              <li><Nav.Link as={Link} to="form-element.html">Form Elements</Nav.Link></li>
              <li><Nav.Link as={Link} to="form-wizard.html">Wizard</Nav.Link></li>
              <li><Nav.Link as={Link} to="form-editor-summernote.html">Summernote</Nav.Link></li>
              <li><Nav.Link as={Link} to="form-pickers.html">Pickers</Nav.Link></li>
              <li><Nav.Link as={Link} to="form-validation-jquery.html">Jquery Validate</Nav.Link></li>
            </ul>
          </li>

          <li>
            <Nav.Link as={Link} to="#" className="has-arrow ai-icon">
              <FaTable />
              <span className="nav-text">Table</span>
            </Nav.Link>
            <ul aria-expanded="false">
              <li><Nav.Link as={Link} to="table-bootstrap-basic.html">Bootstrap</Nav.Link></li>
              <li><Nav.Link as={Link} to="table-datatable-basic.html">Datatable</Nav.Link></li>
              <li><Nav.Link as={Link} to="table-jquerydatatable.html">Jquery Datatable</Nav.Link></li>
            </ul>
          </li>

          <li>
            <Nav.Link as={Link} to="#" className="has-arrow ai-icon">
              <FaFileAlt />
              <span className="nav-text">Pages</span>
            </Nav.Link>
            <ul aria-expanded="false">
              <li><Nav.Link as={Link} to="page-register.html">Register</Nav.Link></li>
              <li><Nav.Link as={Link} to="page-login.html">Login</Nav.Link></li>
              <li><Nav.Link as={Link} to="page-lock-screen.html">Lock Screen</Nav.Link></li>
              <li><Nav.Link as={Link} to="page-error-404.html">Error 404</Nav.Link></li>
              <li><Nav.Link as={Link} to="page-error-403.html">Error 403</Nav.Link></li>
              <li><Nav.Link as={Link} to="page-error-400.html">Error 400</Nav.Link></li>
              <li><Nav.Link as={Link} to="page-error-500.html">Error 500</Nav.Link></li>
              <li><Nav.Link as={Link} to="page-error-503.html">Error 503</Nav.Link></li>
              <li><Nav.Link as={Link} to="page-lock-screen.html">Lock Screen</Nav.Link></li>
            </ul>
          </li>

          <li>
            <Nav.Link as={Link} to="#" className="has-arrow ai-icon">
              <FaPrint />
              <span className="nav-text">Invoice</span>
            </Nav.Link>
            <ul aria-expanded="false">
              <li><Nav.Link as={Link} to="invoice.html">Invoice</Nav.Link></li>
              <li><Nav.Link as={Link} to="invoice-edit.html">Invoice Edit</Nav.Link></li>
              <li><Nav.Link as={Link} to="invoice-detail.html">Invoice Detail</Nav.Link></li>
              <li><Nav.Link as={Link} to="invoice-print.html">Invoice Print</Nav.Link></li>
            </ul>
          </li>

          <li>
            <Nav.Link as={Link} to="#" className="has-arrow ai-icon">
              <FaLock />
              <span className="nav-text">Authentication</span>
            </Nav.Link>
            <ul aria-expanded="false">
              <li><Nav.Link as={Link} to="login.html">Login</Nav.Link></li>
              <li><Nav.Link as={Link} to="register.html">Register</Nav.Link></li>
              <li><Nav.Link as={Link} to="lockscreen.html">Lock Screen</Nav.Link></li>
            </ul>
          </li>

          <li>
            <Nav.Link as={Link} to="#" className="has-arrow ai-icon">
              <FaExclamationTriangle />
              <span className="nav-text">Error</span>
            </Nav.Link>
            <ul aria-expanded="false">
              <li><Nav.Link as={Link} to="page-error-404.html">Error 404</Nav.Link></li>
              <li><Nav.Link as={Link} to="page-error-403.html">Error 403</Nav.Link></li>
              <li><Nav.Link as={Link} to="page-error-400.html">Error 400</Nav.Link></li>
              <li><Nav.Link as={Link} to="page-error-500.html">Error 500</Nav.Link></li>
              <li><Nav.Link as={Link} to="page-error-503.html">Error 503</Nav.Link></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
