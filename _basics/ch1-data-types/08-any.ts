let notSure: any = 4;

// okay, ifItExists might exist at runtime
notSure.ifItExists(); 
// okay, toFixed exists (but the compiler doesn't check)
notSure.toFixed(); 

let prettySure: Object = 4;
// Error: Property 'toFixed' doesn't exist on type 'Object'.
// prettySure.toFixed(); 