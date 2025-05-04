export class CustomValidator {
    private data: any;
    private keys: string[];
  
    constructor(data: any, keysToValidate: string[]) {
      this.data = data;
      this.keys = keysToValidate;
    }
  
    public get isValid(): boolean {
      return this.keys.every(key => this.isFieldValid(this.data[key]));
    }
  
    private isFieldValid(value: any): boolean {
      if (value === null || value === undefined) return false;
  
      if (typeof value === 'string' && value.trim() === '') return false;
  
      if (Array.isArray(value) && value.length === 0) return false;
  
      return true;
    }
  }