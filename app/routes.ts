import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("/sample", "routes/sample/sample.tsx"),
  route("/deposit", "routes/deposit/deposit.tsx"),
    route("/login", "routes/login/login.tsx"),
  route("/logout", "routes/logout.ts"),
  route("/forgot-password", "routes/forgot-password/forgot-password.tsx"),
  route("/reports", "routes/reports/reports.tsx"),
  route("/shareholder-deposits", "routes/shareholder-deposits.ts"),
] satisfies RouteConfig;
