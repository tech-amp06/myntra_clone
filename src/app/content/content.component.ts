import { Component, ɵsetCurrentInjector, Signal, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AllProductsComponent } from '../all-products/all-products.component';
import { Product } from '../../assets/products.model';

@Component({
  selector: 'app-content',
  imports: [RouterOutlet, FormsModule, AllProductsComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})

export class ContentComponent {
  products = signal<Product[]>([
    { 
      id: 0,
      hlink: ["https://chkokko.com/cdn/shop/files/1_46a0fa06-6c0c-474c-8b8f-6ad0a1f4a78d.jpg?v=1720174509"],
      brand: "CHKOKKO",
      type: "Oversized Cotton Solid Round Neck",
      price: 299,
      stock: 6,
      sex: "M",
      quantity: 0
    },
    { 
      id: 1,
      hlink: ["https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/8938961/2019/4/23/858d8b4c-293d-490c-83e9-a2d345dc8e821556012649993-Roadster-Men-Tshirts-3091556012648582-1.jpg",
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/8938961/2019/4/23/63eb372c-bf0f-49af-a0dc-b7b06d88c0c91556012649974-Roadster-Men-Tshirts-3091556012648582-2.jpg", "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/8938961/2019/4/23/b0ee4d81-ffac-48dc-9edc-2026627b02e31556012649925-Roadster-Men-Tshirts-3091556012648582-4.jpg", "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/8938961/2019/4/23/9859b918-df96-44e5-9857-e61d89c1c93a1556012649946-Roadster-Men-Tshirts-3091556012648582-3.jpg"],
      brand: "ROADSTER",
      type: "Oversized Cotton Solid Round Neck",
      price: 459,
      stock: 10,
      sex: "M",
      quantity: 0
    },
    { 
      id: 2,
      hlink: ["https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/2024/OCTOBER/4/8CbeUugx_1c08f04d31264036b9b3fbcebf9eb32a.jpg", "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/2024/OCTOBER/4/1ZeOPKQG_a0f105b3559f46aeb1b590bcbacf3713.jpg", "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/2024/OCTOBER/4/r2dcECeW_e190bafaf95840a88724409e3d2433cc.jpg", "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/2024/OCTOBER/4/ZMBRgRn5_0a5863f990d74634b7915f8cf15e3dc6.jpg"],
      brand: "ROADSTER",
      type: "Teal Blue Typography Printed Pure Cotton",
      price: 679,
      stock: 24,
      sex: "F",
      quantity: 0
    },
    { 
      id: 3,
      hlink: ["https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/11545304/2020/7/10/4b821c42-dc9e-462a-89a8-10ac8779b9291594373008093-Roadster-Men-Tshirts-1651594373006324-1.jpg", "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11545304/2020/7/10/2a8bbfc2-38eb-401c-86cb-4568e0341d661594373008004-Roadster-Men-Tshirts-1651594373006324-2.jpg", "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11545304/2020/7/10/28ea2af1-38e3-41c6-886b-ad7070ef23511594373007949-Roadster-Men-Tshirts-1651594373006324-3.jpg", "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11545304/2020/7/10/ba269490-06c8-475d-a8f8-25738b10e1381594373007807-Roadster-Men-Tshirts-1651594373006324-5.jpg"],
      brand: "ROADSTER",
      type: "Black Printed Round Neck Pure Cotton",
      price: 839,
      stock: 8,
      sex: "M",
      quantity: 0
    },
    { 
      id: 4,
      hlink: ["https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/11545192/2022/3/25/626b0419-cbb0-4200-8490-67e20a0021c51648208612203-Roadster-Men-Green--White-Printed-Round-Neck-Pure-Cotton-T-s-1.jpg", "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11545192/2022/3/25/2094dc05-e8c0-4f22-b142-66b29a59895c1648208612193-Roadster-Men-Green--White-Printed-Round-Neck-Pure-Cotton-T-s-2.jpg", "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11545192/2022/3/25/2afc6904-e053-4190-8f04-308e3a458eac1648208612185-Roadster-Men-Green--White-Printed-Round-Neck-Pure-Cotton-T-s-3.jpg", "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11545192/2022/3/25/a7d1f1a0-ff9c-4674-8980-ce7a1427bff21648208612165-Roadster-Men-Green--White-Printed-Round-Neck-Pure-Cotton-T-s-5.jpg"],
      brand: "ROADSTER",
      type: "Green White Printed Round Neck Pure Cotton",
      price: 299,
      stock: 2,
      sex: "M",
      quantity: 0
    },
    { 
      id: 5,
      hlink: ["https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/17587470/2022/4/28/51112378-6f5f-43f0-a257-16f3fb5be4341651143779451-Difference-of-Opinion-Women-Orange-Typography-Printed-Pure-C-1.jpg"],
      brand: "DIFFXRXNCE",
      type: "Difference of Opinion Orange Oversized",
      price: 499,
      stock: 3,
      sex: "F",
      quantity: 0
    },
    { 
      id: 6,
      hlink: ["https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/27069688/2024/4/18/6f0f0ddd-6ec5-4ea1-9b17-6d4b0bf559de1713434658802-HERENOW-Men-Tshirts-4581713434658441-1.jpg"],
      brand: "HERE&NOW",
      type: "Pure Cotton Graphic Printed Drop-Shoulder",
      price: 1059,
      stock: 0,
      sex: "M",
      quantity: 0
    },
    { 
      id: 7,
      hlink: ["https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/26331770/2024/2/1/05f7916e-fb4b-45ef-9dae-756f4023fd4e1706783646754-Moda-Rapido-Men-Tshirts-4091706783646387-1.jpg", "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/26331770/2024/2/1/a193c251-4957-4522-b6a8-28f582deb3511706783646745-Moda-Rapido-Men-Tshirts-4091706783646387-2.jpg", "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/26331770/2024/2/1/112cd5ea-fb0b-456b-8aba-decf94645cb31706783646736-Moda-Rapido-Men-Tshirts-4091706783646387-3.jpg", "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/26331770/2024/2/1/aca6375d-11a8-4386-87e8-217b57f075c91706783646717-Moda-Rapido-Men-Tshirts-4091706783646387-5.jpg"],
      brand: "MODA RAPIDO",
      type: "Typography Printed Pure Cotton",
      price: 379,
      stock: 7,
      sex: "M",
      quantity: 0
    },
    { 
      id: 8,
      hlink: ["https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/30023938/2024/9/21/10134cfc-7374-4b6f-b3da-d7ff6eb397771726908210969-Kook-N-Keech-Men-Tshirts-8701726908210485-1.jpg"],
      brand: "KOOK N KEECH",
      type: "Cool Vibes Printed Oversized T-shirt",
      price: 227,
      stock: 25,
      sex: "M",
      quantity: 0
    },
    { 
      id: 9,
      hlink: ["https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/11545308/2020/7/10/7535f272-c4cb-4245-9b01-8a6ef69ba5211594373018019-Roadster-Men-Tshirts-2271594373016434-1.jpg"],
      brand: "ROADSTER",
      type: "Grey Printed Round Neck Pure Cotton Tshirt",
      price: 279,
      stock: 12,
      sex: "M",
      quantity: 0
    },
    { 
      id: 10,
      hlink: ["https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/17132720/2022/6/20/7748f30c-e08f-4359-8524-9d8f7d3135281655722336851-DILLINGER-Women-Blue-Printed-Pure-Cotton-Loose-Graphic-Overs-1.jpg"],
      brand: "DILINGER",
      type: "Blue Graphic Oversized Tshirt",
      price: 350,
      stock: 0,
      sex: "F",
      quantity: 0
    },
    { 
      id: 11,
      hlink: ["https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/13551246/2021/2/26/c5db14dc-1034-48e0-81e4-9fe92d76d8ca1614344182637-DILLINGER-Women-Tshirts-4501614344181056-1.jpg"],
      brand: "DILINGER",
      type: "Printed Women Round Neck White Tshirt",
      price: 323,
      stock: 7,
      sex: "F",
      quantity: 0
    },
    { 
      id: 12,
      hlink: ["https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/30764235/2024/9/20/595df0f5-043a-4d0e-beed-ce5fa99404da1726833976115-Mast--Harbour-Men-Tshirts-421726833975702-1.jpg"],
      brand: "MAST AND HARBOUR",
      type: "Printed Bio Finish Tshirt",
      price: 299,
      stock: 20,
      sex: "M",
      quantity: 0
    },
    { 
      id: 13,
      hlink: ["https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/18771364/2022/7/21/3dd4dcc8-3ae4-4f67-a00e-235810d3508e1658395210493-DILLINGER-Women-Tshirts-6481658395209874-1.jpg"],
      brand: "DILINGER",
      type: "Red Typography Oversized Tshirt",
      price: 344,
      stock: 0,
      sex: "F",
      quantity: 0
    },
    { 
      id: 14,
      hlink: ["https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/28136100/2024/3/25/b11f2135-57f8-421e-8c73-f6efb5c31bc81711362636270-Mens-2-Color-Logo-T-shirt-6221711362635794-1.jpg"],
      brand: "PUMA",
      type: "Two Color Logo Printed Pure Cotton Tshirt",
      price: 899,
      stock: 23,
      sex: "M",
      quantity: 0
    },
    { 
      id: 15,
      hlink: ["https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/2024/SEPTEMBER/30/T3cNs22S_73744dd0c7824d10aba6a65970a70191.jpg"],
      brand: "MAST & HARBOUR",
      type: "White Solid Round Neck Pure Cotton Tshirt",
      price: 224,
      stock: 8,
      sex: "F",
      quantity: 0
    }
  ]);
}
