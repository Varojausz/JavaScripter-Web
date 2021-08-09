datos = {}
class IQ {
    constructor (datos,tipo) {
        mf = datos.mf;
        tf1 = datos.tf1;
        tf2 = datos.tf2;
        mc = datos.mc;
        tc1 = datos.tc1;
        tc2 = datos.tc2;
        tclog = (this.tc1 + this.tc2)/2 //Inventado
        tflog = (this.tf1 + this.tf2)/2 //Inventado

        if (tipo===1) {
            //Por ejemplo, me lo estoy inventando ahora mismo
            //Paralelo
            hf = (hf1+hf2)/2
            hc = (hc1+hc2)/2
            Q = (this.mf * hf2 * this.tf2 - this.mf * hf1 * this.tf1)
        }
        if (tipo===2) {
            //Por ejemplo, me lo estoy inventando ahora mismo
            //Cruzado
            hf = (hf1+hf2)/2
            hc = (hc1+hc2)/2
            Q = (this.mf * hf2 * this.tf2 - this.mf * hf1 * this.tf1)
        }
        if (tipo===3) {
            //Por ejemplo, me lo estoy inventando ahora mismo
            //Contracorriente
            hf = (hf1+hf2)/2
            hc = (hc1+hc2)/2
            Q = (this.mf * hf2 * this.tf2 - this.mf * hf1 * this.tf1)
        }
        
    }

    //Métodos de clase...


}