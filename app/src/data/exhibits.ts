import { recordsData, undatedRecords, RecordItem } from "./caseReportData";

export interface Exhibit {
  label: string;
  record: RecordItem;
  index: number;
}

const dated = [...recordsData].sort((a, b) => a.sortDate.localeCompare(b.sortDate));
const undated = [...undatedRecords].sort((a, b) => a.no - b.no);

export const ALL_EXHIBITS: Exhibit[] = [...dated, ...undated].map((record, i) => ({
  record,
  index: i + 1,
  label: `A-${i + 1}`,
}));

const idToExhibit = new Map(ALL_EXHIBITS.map((e) => [e.record.id, e]));

export function exhibitFor(id: string): Exhibit | undefined {
  return idToExhibit.get(id);
}

export function exhibitLabelFor(id: string): string {
  return idToExhibit.get(id)?.label ?? "?";
}
