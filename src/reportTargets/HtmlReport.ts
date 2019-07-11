import fs from "fs";
import { OutputService } from "../Reporter";

export class HtmlReport implements OutputService {
  print(report: string): void {
    const html = `<h1> Analysis: <h5> ${report} </h5> </h1> `;

    fs.writeFileSync("report.html", html);
  }
}
