import { NewEngineFormat } from "./NewEngineFormat";

export interface MetadefenderResponse {
    fileName: string;
    overallStatus: string;
    engines: NewEngineFormat[];
}
