import { MatchResult } from "./MatchResult";
import { MatchReader } from "./MatchReader";
import { CsvFileReader } from "./CsvFileReader";
import { Reporter } from "./Reporter";
import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { ConsoleReport } from "./reportTargets/ConsoleReport";
import { HtmlReport } from "./reportTargets/HtmlReport";

// create a n object that satisfies the 'DataReader' interface
// Create an instance of MatchReader and pass something satisfying the 'DataReader' interface

const csvFileReader = new CsvFileReader("football.csv");
const matchReader = new MatchReader(csvFileReader);

matchReader.load();

const report = new Reporter(
  new WinsAnalysis("Man United"),
  new ConsoleReport()
);

report.buildAndPrintReport(matchReader.matches);

const htmlReport = new Reporter(
  new WinsAnalysis("Man United"),
  new HtmlReport()
);

htmlReport.buildAndPrintReport(matchReader.matches);
