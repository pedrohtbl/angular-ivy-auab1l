export class FilterFormData {
  public item: number = null;

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
