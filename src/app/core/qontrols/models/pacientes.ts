export class Pacientes
{
    id: "12345";
    category: "Electronics";
    name: "Wireless Earbuds";
    description: "High-quality wireless earbuds with noise cancellation.";
    tags: ["wireless", "bluetooth", "earbuds", "audio"];
    sku: "WB-2025";
    barcode: "7894561230123";
    brand: "SoundPro";
    vendor: "Tech Distributors Ltd.";
    stock: 150;
    reserved: 10;
    cost: 25.99;
    basePrice: 49.99;
    taxPercent: 10;
    price: 54.99;
    weight: 0.2;
    thumbnail: "https://example.com/images/earbuds-thumbnail.jpg";
    images: [
      "https://example.com/images/earbuds1.jpg",
      "https://example.com/images/earbuds2.jpg"
    ];
    active: true

    constructor(data?: any) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    


}