import{v as e}from"./Layout.js";class r{static async CheckAccessPrivilege(t){return e("CG_Manual_Reporting.CheckAccessPrivilege",t.reportId)}static async GetNewCGManualReportCount(){return e("CG_Manual_Reporting.GetNewCGManualReportCount")}static async GetNewCGManualReports(t){return e("CG_Manual_Reporting.GetNewCGManualReports",t.sortByParam,t.pageParam)}static async GetNewEmployeeReport(){return e("CG_Manual_Reporting.GetNewEmployeeReport")}static async GetAnnualReport(){return e("CG_Manual_Reporting.GetAnnualReport")}static async GetReportDetail(t){return e("CG_Manual_Reporting.GetReportDetail",t.reportId)}static async SubmitReport(t){return e("CG_Manual_Reporting.SubmitReport",t.report)}static async GetAdminCGReportListCount(t){return e("CG_Manual_Reporting.GetAdminCGReportListCount",t.ownerName,t.ownerId,t.companyId,t.function,t.department,t.section,t.unit)}static async GetAdminCGReportList(t){return e("CG_Manual_Reporting.GetAdminCGReportList",t.ownerName,t.ownerId,t.companyId,t.function,t.department,t.section,t.unit,t.sortByParam,t.pageParam)}static async AdminResendReport(t){return e("CG_Manual_Reporting.AdminResendReport",t.reportId)}static async AdminCancelReport(t){return e("CG_Manual_Reporting.AdminCancelReport",t.reportId)}static async ManualFiles(){return e("CG_Manual_Reporting.ManualFiles")}static async CGAcknowledgeForm(t){return e("CG_Manual_Reporting.CGAcknowledgeForm",t.reportId)}static async CGGlobal_GetCompanies(){return e("CG_Manual_Reporting.CGGlobal_GetCompanies")}static async CGGlobal_GetFunctions(t){return e("CG_Manual_Reporting.CGGlobal_GetFunctions",t.companyId)}static async CGGlobal_GetDepartments(t){return e("CG_Manual_Reporting.CGGlobal_GetDepartments",t.function)}static async CGGlobal_GetSections(t){return e("CG_Manual_Reporting.CGGlobal_GetSections",t.department)}static async CGGlobal_GetUnits(t){return e("CG_Manual_Reporting.CGGlobal_GetUnits",t.section)}}export{r as C};