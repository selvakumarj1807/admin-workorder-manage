import React, { useState } from "react";
import {
  LoginOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import { Route, Routes, useNavigate } from "react-router-dom";
import "./sidebar.css";

// import OrderForVendor from './ui/OrderVerifycation/OrderForVendor';
// import OrderRecivVendor from './ui/OrderVerifycation/OrderRecivVendor';
// import OrderForUser from './ui/OrderVerifycation/OrderForUser';
import ForwardUserForm from "./main/user/EnquiryForm/ForwardUserForm";
import RecivedUserForm from "./main/user/EnquiryForm/RecivedUserForm";
import RecivedOrderUser from "./main/user/OrderVerification/RecivedOrderUser";
import ForwardUserQuote from "./main/user/Quote/ForwardUserQuote";
import UserAcknowledge from "./main/user/Acknowledgement/UserAcknowledge";
import UserStatus from "./main/user/OrderStatus/UserStatus";
import UserHistory from "./main/user/OrderHistory/UserHistory";
import UserInvoice from "./main/user/Invoice/UserInvoice";
import UserPayment from "./main/user/Payment/UserPayment";
import UserDelivery from "./main/user/Delivery/UserDelivery";
import ForwardVendorForm from "./main/vendor/EnquiryForm/ForwardVendorForm";
import RecivedVendorForm from "./main/vendor/EnquiryForm/RecivedVendorForm";
import EditQuote from "./main/vendor/Quote/EditQuote";
import VendorAcknowledge from "./main/vendor/Acknoledgement/VendorAcknowledge";
import VendorStatus from "./main/vendor/OrderStatus/VendorStatus";
import VendorHistory from "./main/vendor/OrderHistory/VendorHistory";
import VendorInvoice from "./main/vendor/Invoice/VendorInvoice";
import VendorPayment from "./main/vendor/Payment/VendorPayment";
import VendorDelivery from "./main/vendor/Delivery/VendorDelivery";
import RecivedVendorQuote from "./main/vendor/Quote/RecivedVendorQuote";
import Dashboard from "./Dashboard/Dashboard";
import UserManagement from "./Dashboard/UserManagement";
import VendorManage from "./Dashboard/VendorManage";
import AdminRoles from "./Dashboard/Access Manage/AdminRoles";
import AdminPermission from "./Dashboard/Access Manage/AdminPermission";
import Business from "./Dashboard/Settings/Business";
import Configuration from "./Dashboard/Settings/Configuration";
import Application from "./Dashboard/Settings/Application";
import Payment from "./Dashboard/Settings/Payment";
import SocialMedia from "./Dashboard/Settings/SocialMedia";
import MailConfig from "./Dashboard/Settings/MailConfig";
import Reports from "./Dashboard/Reports";
import PushNotification from "./Dashboard/PushNotification";
const {  Sider, Content } = Layout;

const Sidebar = () => {
  let navigate = useNavigate();

  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout>
      <Sider
        className="light-bg"
        trigger={null}
        collapsible
        collapsed={collapsed}
      >
        <div className="demo-logo-vertical" />
        <Menu
          mode="inline"
          defaultSelectedKeys={["0"]}
          items={[
            {
              key: "0",
              label: "Logo",
              onClick: () => {
                navigate("/");
              },
            },

            // {
            //   dropdown: true,
            //   icon: <AppstoreOutlined />,
            //   label: "Admin",
            //   children: [
            {
              key: "1",
              label: "Dashboard",
              onClick: () => {
                navigate("/");
              },
            },
            {
              key: "1.2",
              label: "User Management",
              onClick: () => {
                navigate("/admin/userManage");
              },
            },
            {
              key: "1.3",
              label: "Vendor Management",
              onClick: () => {
                navigate("/admin/vendorManage");
              },
            },
            {
              key: "2",
              dropdown: true,
              label: "Access Management",
              children: [
                {
                  key: "2.1",
                  label: "Roles",
                  onClick: () => {
                    navigate("/admin/access/roles");
                  },
                },
                {
                  key: "2.2",
                  label: "Permission",
                  onClick: () => {
                    navigate("/admin/access/permission");
                  },
                },
              ],
            },
            {
              key: "3",
              dropdown: true,
              label: "Enquiry Management",
              children: [
                {
                  key: "3.1",
                  label: "User",
                  onClick: () => {
                    navigate("/user/enquiry/recived");
                  },
                },
                {
                  key: "3.2",
                  label: "Vendor",
                  onClick: () => {
                    navigate("/vendor/enquiry/recived");
                  },
                },
              ],
            },

            {
              key: "4",
              label: "Push Notification",
              onClick: () => {
                navigate("/admin/notification");
              },
            },
            {
              key: "5",
              dropdown: true,
              label: "Quote Management",
              children: [
                {
                  key: "5.1",
                  label: "Vendor-Quote(Received)",
                  onClick: () => {
                    navigate("/vendor/recivedQuote");
                  },
                },
                {
                  key: "5.2",
                  label: "Edit Quote (Admin)",
                  onClick: () => {
                    navigate("/vendor/editQuote");
                  },
                },
                {
                  key: "5.3",
                  label: "User Quote (Forward)",
                  onClick: () => {
                    navigate("/user/forwardQuote");
                  },
                },
              ],
            },
            {
              key: "6",
              label: "Order Management",
              onClick: () => {
                navigate("/user/orderVerified");
              },
            },
            {
              key: "7",
              dropdown: true,
              label: "Delivery Management",
              children: [
                {
                  key: "7.1",
                  label: "User",
                  onClick: () => {
                    navigate("/user/delivery");
                  },
                },
                {
                  key: "7.2",
                  label: "Vendor",
                  onClick: () => {
                    navigate("/vendor/delivery");
                  },
                },
              ],
            },

            {
              key: "8",
              label: "Reports & Analytics",
              onClick: () => {
                navigate("/admin/report");
              },
            },
            {
              key: "9",
              dropdown: true,
              label: "Configuration Settings",
              children: [
                {
                  key: "9.1",
                  label: "Business Setup",
                  onClick: () => {
                    navigate("/admin/setting/business");
                  },
                },
                // {
                //   key: "9.2",
                //   label: "Application Settings",
                //   onClick: () => {
                //     navigate("/admin/setting/application");
                //   },
                // },
                {
                  key: "9.2",
                  label: "Payment Method",
                  onClick: () => {
                    navigate("/admin/setting/payment");
                  },
                },
                {
                  key: "9.3",
                  label: "Social Media",
                  onClick: () => {
                    navigate("/admin/setting/social");
                  },
                },
                {
                  key: "9.4",
                  label: "Mail configuration",
                  onClick: () => {
                    navigate("/admin/mail");
                  },
                },
              ],
            },
            //   ],
            // },

            {
              key: "10",
              label: "Log out",
              icon: <LoginOutlined />,
            },
          ]}
        />
      </Sider>
      <Layout>
        {/* <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
        </Header> */}
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            height: "43em",

            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Routes>
            {/* Admin */}
            <Route exact path="/" element={<Dashboard />} />
            <Route
              exact
              path="/admin/userManage"
              element={<UserManagement />}
            />
            <Route
              exact
              path="/admin/vendorManage"
              element={<VendorManage />}
            />
            <Route exact path="/admin/access/roles" element={<AdminRoles />} />
            <Route
              exact
              path="/admin/access/permission"
              element={<AdminPermission />}
            />
            <Route
              exact
              path="/admin/setting/business"
              element={<Business />}
            />
            <Route
              exact
              path="/admin/setting/configuration"
              element={<Configuration />}
            />
            <Route
              exact
              path="/admin/setting/application"
              element={<Application />}
            />
            <Route exact path="/admin/setting/payment" element={<Payment />} />
            <Route
              exact
              path="/admin/setting/social"
              element={<SocialMedia />}
            />
            <Route exact path="/admin/mail" element={<MailConfig />} />
            <Route exact path="/admin/report" element={<Reports />} />
            <Route exact path="/admin/notification" element={<PushNotification />} />

            {/* User */}
            {/* Enquiry Form */}
            <Route
              exact
              path="/user/enquiry/recived"
              element={<RecivedUserForm />}
            />
            <Route
              exact
              path="/user/enquiry/forward"
              element={<ForwardUserForm />}
            />

            {/* Order Verify */}
            <Route
              exact
              path="/user/orderVerified"
              element={<RecivedOrderUser />}
            />
            {/* <Route exact path='/orderVerify/forwardVendor' element={<OrderForVendor /> } />
            <Route exact path='/orderVerify/recivedVendor' element={<OrderRecivVendor/> } />
            <Route exact path='/orderVerify/forwardUser' element={<OrderForUser /> } /> */}

            {/* Quotation */}
            <Route
              exact
              path="/user/forwardQuote"
              element={<ForwardUserQuote />}
            />

            {/* Acknowledgement */}
            <Route exact path="/user/acknow" element={<UserAcknowledge />} />

            {/* Order Status */}
            <Route exact path="/user/status" element={<UserStatus />} />

            {/* Order History */}
            <Route exact path="/user/history" element={<UserHistory />} />

            {/* Invoice */}
            <Route exact path="/user/invoice" element={<UserInvoice />} />

            {/* Payment */}
            <Route exact path="/user/payment" element={<UserPayment />} />

            {/* Delivery */}
            <Route exact path="/user/delivery" element={<UserDelivery />} />

            {/* Vendor */}
            {/* Enquiry Form */}
            <Route
              exact
              path="/vendor/enquiry/recived"
              element={<RecivedVendorForm />}
            />
            <Route
              exact
              path="/vendor/enquiry/forward"
              element={<ForwardVendorForm />}
            />

            {/* Quotation */}
            <Route
              exact
              path="/vendor/recivedQuote"
              element={<RecivedVendorQuote />}
            />
            <Route exact path="/vendor/editQuote" element={<EditQuote />} />

            {/* Acknowledgement */}
            <Route
              exact
              path="/vendor/acknow"
              element={<VendorAcknowledge />}
            />

            {/* Order Status */}
            <Route exact path="/vendor/status" element={<VendorStatus />} />

            {/* Order History */}
            <Route exact path="/vendor/history" element={<VendorHistory />} />

            {/* Invoice */}
            <Route exact path="/vendor/invoice" element={<VendorInvoice />} />

            {/* Payment */}
            <Route exact path="/vendor/payment" element={<VendorPayment />} />

            {/* Delivery */}
            <Route exact path="/vendor/delivery" element={<VendorDelivery />} />
          </Routes>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Sidebar;
