import {LogEnum} from "@/utils/enum/log.enum";
import {StatusCode} from "@/utils/enum/status.code";
import {ErrorCode} from "@/utils/enum/error.code";

class DuplicateResource extends Error {
    public resource: string;
    public resourceField: string;
    public resourceValue: string;
    public statusCode: number;
    public errorCode: string

    constructor(resource: string, resourceField: string, resourceValue: string) {
        super(`${resource} ${LogEnum.DUPLICATE_RESOURCE} ${resourceField}: ${resourceValue}`);
        this.resource = resource;
        this.resourceField = resourceField;
        this.resourceValue = resourceValue
        this.statusCode = StatusCode.DUPLICATE;
        this.errorCode = ErrorCode.RESOURCE_DUPLICATE
    }
}

export default DuplicateResource