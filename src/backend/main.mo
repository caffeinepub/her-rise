import Runtime "mo:core/Runtime";
import Array "mo:core/Array";
import Time "mo:core/Time";
import Map "mo:core/Map";
import Iter "mo:core/Iter";

actor {
  type ReportId = Nat;

  type Report = {
    id : ReportId;
    reportType : Text;
    description : Text;
    location : ?Text;
    submittedAt : Time.Time;
  };

  let reports = Map.empty<ReportId, Report>();
  var nextId = 0;

  public shared ({ caller }) func submitReport(reportType : Text, description : Text, location : ?Text) : async ReportId {
    let report : Report = {
      id = nextId;
      reportType;
      description;
      location;
      submittedAt = Time.now();
    };
    reports.add(nextId, report);
    nextId += 1;
    report.id;
  };

  public shared ({ caller }) func getAllReports() : async [Report] {
    reports.values().toArray();
  };
};
