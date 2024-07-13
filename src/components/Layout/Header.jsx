import React from 'react';


const Header = () => {
    return (
        <div className="header" >
            <div className="header-content">
                <nav className="navbar navbar-expand">
                    <div className="collapse navbar-collapse justify-content-between">
                        <div className="header-left">
                            <div className="dashboard_bar">
                                Dashboard
                            </div>
                        </div>
                        <ul className="navbar-nav header-right">
                            <li className="nav-item">
                                <div className="input-group search-area">
                                    <input type="text" className="form-control" placeholder="Search here..." />
                                    <span className="input-group-text">
                                        <a href="javascript:void(0)">
                                            <i className="flaticon-381-search-2"></i>
                                        </a>
                                    </span>
                                </div>
                            </li>
                            <li className="nav-item dropdown notification_dropdown">
                                <a className="nav-link bell dz-theme-mode p-0" href="javascript:void(0);">
                                    <i id="icon-light" className="fas fa-sun"></i>
                                    <i id="icon-dark" className="fas fa-moon"></i>
                                </a>
                            </li>
                            <li className="nav-item dropdown notification_dropdown">
                                <a className="nav-link" href="javascript:void(0);" data-bs-toggle="dropdown">
                                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3.88552 6.2921C1.95571 6.54135 0.439911 8.19656 0.439911 10.1896V10.7253C0.439911 12.8874 2.21812 14.6725 4.38019 14.6725H12.7058V24.9768H7.01104C5.77451 24.9768 4.82009 24.0223 4.82009 22.7858V18.4039C4.84523 16.6262 2.16581 16.6262 2.19096 18.4039V22.7858C2.19096 25.4334 4.36345 27.6059 7.01104 27.6059H21.0331C23.6807 27.6059 25.8532 25.4334 25.8532 22.7858V13.9981C26.9064 13.286 27.6042 12.0802 27.6042 10.7253V10.1896C27.6042 8.17115 26.0501 6.50077 24.085 6.28526C24.0053 0.424609 17.6008 -1.28785 13.9827 2.48534C10.3936 -1.60185 3.7545 1.06979 3.88552 6.2921ZM12.7058 5.68103C12.7058 5.86287 12.7033 6.0541 12.7058 6.24246H6.50609C6.55988 2.31413 11.988 1.90765 12.7058 5.68103ZM21.4559 6.24246H15.3383C15.3405 6.05824 15.3538 5.87664 15.3383 5.69473C15.9325 2.04532 21.3535 2.18829 21.4559 6.24246ZM4.38019 8.87502H12.7058V12.0382H4.38019C3.62918 12.0382 3.06562 11.4764 3.06562 10.7253V10.1896C3.06562 9.43859 3.6292 8.87502 4.38019 8.87502ZM15.3383 8.87502H23.6656C24.4166 8.87502 24.9785 9.43859 24.9785 10.1896V10.7253C24.9785 11.4764 24.4167 12.0382 23.6656 12.0382H15.3383V8.87502ZM15.3383 14.6725H23.224V22.7858C23.224 24.0223 22.2696 24.9768 21.0331 24.9768H15.3383V14.6725Z" fill="#4f7086" />
                                    </svg>
                                    <span className="badge light text-white bg-primary rounded-circle">2</span>
                                </a>
                                <div className="dropdown-menu dropdown-menu-end">
                                    <div id="dlab_W_TimeLine02" className="widget-timeline dlab-scroll style-1 p-3 height370">
                                        <ul className="timeline">
                                            <li>
                                                <div className="timeline-badge primary"></div>
                                                <a className="timeline-panel text-muted" href="javascript:void(0);">
                                                    <span>10 minutes ago</span>
                                                    <h6 className="mb-0">Youtube, a video-sharing website, goes live <strong className="text-primary">$500</strong>.</h6>
                                                </a>
                                            </li>
                                            <li>
                                                <div className="timeline-badge info"></div>
                                                <a className="timeline-panel text-muted" href="javascript:void(0);">
                                                    <span>20 minutes ago</span>
                                                    <h6 className="mb-0">New order placed <strong className="text-info">#XF-2356.</strong></h6>
                                                    <p className="mb-0">Quisque a consequat ante Sit amet magna at volutapt...</p>
                                                </a>
                                            </li>
                                            <li>
                                                <div className="timeline-badge danger"></div>
                                                <a className="timeline-panel text-muted" href="javascript:void(0);">
                                                    <span>30 minutes ago</span>
                                                    <h6 className="mb-0">john just buy your product <strong className="text-warning">Sell $250</strong></h6>
                                                </a>
                                            </li>
                                            <li>
                                                <div className="timeline-badge success"></div>
                                                <a className="timeline-panel text-muted" href="javascript:void(0);">
                                                    <span>15 minutes ago</span>
                                                    <h6 className="mb-0">StumbleUpon is acquired by eBay.</h6>
                                                </a>
                                            </li>
                                            <li>
                                                <div className="timeline-badge warning"></div>
                                                <a className="timeline-panel text-muted" href="javascript:void(0);">
                                                    <span>20 minutes ago</span>
                                                    <h6 className="mb-0">Mashable, a news website and blog, goes live.</h6>
                                                </a>
                                            </li>
                                            <li>
                                                <div className="timeline-badge dark"></div>
                                                <a className="timeline-panel text-muted" href="javascript:void(0);">
                                                    <span>20 minutes ago</span>
                                                    <h6 className="mb-0">Mashable, a news website and blog, goes live.</h6>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li className="nav-item dropdown notification_dropdown">
                                <a className="nav-link ai-icon" href="javascript:void(0);" role="button" data-bs-toggle="dropdown">
                                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M12.638 4.9936V2.3C12.638 1.5824 13.2484 1 14.0006 1C14.7513 1 15.3631 1.5824 15.3631 2.3V4.9936C17.3879 5.2718 19.2805 6.1688 20.7438 7.565C22.5329 9.2719 23.5384 11.5872 23.5384 14V18.8932L24.6408 20.9966C25.1681 22.0041 25.1122 23.2001 24.4909 24.1582C23.8709 25.1163 22.774 25.7 21.5941 25.7H15.3631C15.3631 26.4176 14.7513 27 14.0006 27C13.2484 27 12.638 26.4176 12.638 25.7H6.4066C5.2266 25.7 4.1307 25.1163 3.5107 24.1582C2.8883 23.2001 2.8324 22.0041 3.3597 20.9966L4.4621 18.8932V14C4.4621 11.5872 5.4675 9.2719 7.257 7.565C8.7198 6.1688 10.6124 5.2718 12.638 4.9936ZM14.0006 24.4C14.7509 24.4 15.3627 23.8176 15.3627 23.1V19.8C15.3627 19.0824 14.7509 18.5 14.0006 18.5C13.2484 18.5 12.638 19.0824 12.638 19.8V23.1C12.638 23.8176 13.2484 24.4 14.0006 24.4ZM18.187 9.1366C17.0793 8.0694 15.5756 7.3 14.0006 7.3C12.4234 7.3 10.9201 8.0694 9.8128 9.1366C8.7736 10.1444 8.1756 11.5106 8.1756 13H19.8256C19.8256 11.5106 19.2276 10.1444 18.187 9.1366ZM19.8256 14.4H8.1756V18.1182L6.9914 20.5532C6.8634 20.7953 6.894 21.0839 7.0781 21.2966C7.2621 21.5093 7.5483 21.6 7.8325 21.6H20.1689C20.453 21.6 20.7392 21.5093 20.9233 21.2966C21.1073 21.0839 21.1378 20.7953 21.0098 20.5532L19.8256 18.1182V14.4Z" fill="#2F3B52"/>
                                    </svg>
                                    <span className="badge light text-white bg-primary rounded-circle">3</span>
                                </a>
                                <div className="dropdown-menu dropdown-menu-end">
                                    <div id="dlab_W_TimeLine03" className="widget-timeline dlab-scroll style-1 p-3 height370">
                                        <ul className="timeline">
                                            <li>
                                                <div className="timeline-badge primary"></div>
                                                <a className="timeline-panel text-muted" href="javascript:void(0);">
                                                    <span>10 minutes ago</span>
                                                    <h6 className="mb-0">Youtube, a video-sharing website, goes live <strong className="text-primary">$500</strong>.</h6>
                                                </a>
                                            </li>
                                            <li>
                                                <div className="timeline-badge info"></div>
                                                <a className="timeline-panel text-muted" href="javascript:void(0);">
                                                    <span>20 minutes ago</span>
                                                    <h6 className="mb-0">New order placed <strong className="text-info">#XF-2356.</strong></h6>
                                                    <p className="mb-0">Quisque a consequat ante Sit amet magna at volutapt...</p>
                                                </a>
                                            </li>
                                            <li>
                                                <div className="timeline-badge danger"></div>
                                                <a className="timeline-panel text-muted" href="javascript:void(0);">
                                                    <span>30 minutes ago</span>
                                                    <h6 className="mb-0">john just buy your product <strong className="text-warning">Sell $250</strong></h6>
                                                </a>
                                            </li>
                                            <li>
                                                <div className="timeline-badge success"></div>
                                                <a className="timeline-panel text-muted" href="javascript:void(0);">
                                                    <span>15 minutes ago</span>
                                                    <h6 className="mb-0">StumbleUpon is acquired by eBay.</h6>
                                                </a>
                                            </li>
                                            <li>
                                                <div className="timeline-badge warning"></div>
                                                <a className="timeline-panel text-muted" href="javascript:void(0);">
                                                    <span>20 minutes ago</span>
                                                    <h6 className="mb-0">Mashable, a news website and blog, goes live.</h6>
                                                </a>
                                            </li>
                                            <li>
                                                <div className="timeline-badge dark"></div>
                                                <a className="timeline-panel text-muted" href="javascript:void(0);">
                                                    <span>20 minutes ago</span>
                                                    <h6 className="mb-0">Mashable, a news website and blog, goes live.</h6>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li className="nav-item dropdown header-profile">
                                <a className="nav-link" href="javascript:void(0);" role="button" data-bs-toggle="dropdown">
                                    <img src="images/profile/pic1.jpg" width="20" alt="" />
                                    <div className="header-info">
                                        <span className="fs-20 font-w500">Hey, <b>Saiful</b></span>
                                        <small className="text-end fs-14 font-w400">Saiful Islam</small>
                                    </div>
                                </a>
                                <div className="dropdown-menu dropdown-menu-end">
                                    <a href="app-profile.html" className="dropdown-item ai-icon">
                                        <svg id="icon-user1" xmlns="http://www.w3.org/2000/svg" className="text-primary" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                            <circle cx="12" cy="7" r="4"></circle>
                                        </svg>
                                        <span className="ms-2">Profile </span>
                                    </a>
                                    <a href="email-inbox.html" className="dropdown-item ai-icon">
                                        <svg id="icon-inbox" xmlns="http://www.w3.org/2000/svg" className="text-success" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M20 12H16L14 15H10L8 12H4"></path>
                                            <path d="M2 12V6C2 5.20435 2.31607 4.44129 2.87868 3.87868C3.44129 3.31607 4.20435 3 5 3H19C19.7956 3 20.5587 3.31607 21.1213 3.87868C21.6839 4.44129 22 5.20435 22 6V12"></path>
                                            <path d="M2 12L4 21H20L22 12"></path>
                                        </svg>
                                        <span className="ms-2">Inbox </span>
                                    </a>
                                    <a href="page-error-404.html" className="dropdown-item ai-icon">
                                        <svg id="icon-logout" xmlns="http://www.w3.org/2000/svg" className="text-danger" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M9 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H9"></path>
                                            <polyline points="16 17 21 12 16 7"></polyline>
                                            <line x1="21" y1="12" x2="9" y2="12"></line>
                                        </svg>
                                        <span className="ms-2">Logout </span>
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    );
}

export default Header;
