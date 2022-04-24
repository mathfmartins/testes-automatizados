import { Injectable } from "@angular/core";
import { v4 as uuidv4 } from "uuid";

@Injectable()
export class UniqueIdService {

  private numberOfUniqueId = 0;

  generatedUniqueIdWithPrefix(prefix: string): string {
    if (!prefix) {
      throw Error('prefix can not be empty');
    }
    const uniqueId = this.generatedUniqueId();
    this.numberOfUniqueId++;
    return `${prefix}-${uniqueId}`
  }

  generatedUniqueId(): string {
    return uuidv4();
  }

  getNumberOfGeneratedUniqueIds(): number {
    return this.numberOfUniqueId;
  }
}
