import { MatchData } from "./MatchData";

export interface Analyzer {
  run(matches: MatchData[]): string;
}

export interface OutputService {
  print(report: string): void;
}

export class Reporter {
  constructor(public analyzer: Analyzer, public outputService: OutputService) {}

  buildAndPrintReport(matches: MatchData[]): void {
    const output = this.analyzer.run(matches);
    this.outputService.print(output);
  }
}
