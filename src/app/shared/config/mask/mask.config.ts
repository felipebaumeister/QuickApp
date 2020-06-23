export class MaskConfig {
   public phoneMask = ['(', /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
   public dateBrMask = [ /\d/, /\d/, '\/', /\d/, /\d/, '\/', /\d/, /\d/, /\d/, /\d/];
   public estadoMask = [ /\w/, /\w/];
}