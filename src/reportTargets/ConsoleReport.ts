import { OutputService } from "../Reporter";

export class ConsoleReport implements OutputService {
  print(report: string): void {
    console.log(report);
  }
}
