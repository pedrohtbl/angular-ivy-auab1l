export class FilterFormData {
  public crop: number = null;
  public culture: any[] = [];
  public ruralProperty: any[] = [];

  constructor(
    formData?: any
  ) {
    if (formData) {

      for (const property in formData) {

        if (typeof this[property] !== 'undefined') {
          this[property] = formData[property];
        }
      }
    }
  }
}
