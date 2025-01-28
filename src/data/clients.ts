import { Briefcase, Building2, Factory, GraduationCap, Icon } from "lucide-react";

export interface ClientCategory {
    category: string;
    icon: typeof Icon;
    description: string;
    items: string[];
}

export const clientCategories: ClientCategory[] = [
    {
        category: "Real Estate & Construction",
        icon: Building2,
        description: "Leading builders and construction firms",
        items: [
            "Abhidev Construction", "Aishwarya Construction", "Aishwarya Enclave",
            "Amit Trading", "Apna Awas", "Arohi Realters Co.", "Balaji Construction",
            "Bansal Construction", "Bhagwati Developer & Infrastructure",
            "Dev Construction", "Devika Construction", "Egmah Construction",
            "Eklavya Estate Pvt Ltd.", "Gangotri Enclave", "Ganpati Construction",
            "Gautam Developers & Builders", "Hill View Construction",
            "Hotel Rameshwaram, Deoghar", "Indrapuri Construction Pvt. Ltd.",
            "Jai Balaji Construction", "Jai Maa Tara Construction",
            "Jai Maa Construction", "Jain Construction", "Jayshankar Construction",
            "JKM Construction", "JRG Associates", "Jugal Construction",
            "K.R.Corporation", "Keshav Prasad, Simdega", "Ketki Construction",
            "Kosut Builder", "Lucky Construction", "M.R.Construction",
            "Maa Bhawani Construction", "Maa Gayatri Construction",
            "Maa Vindyavashni Enterprises", "Magadh Developers",
            "Malhotra Construction", "Manya Construction", "Mont Blank Construction Pvt. Ltd.",
            "Morias Construction Co. Pvt. Ltd.", "Navin Construction",
            "Neha Infrastructure Hazaribagh", "Nihit Enterprises Pvt. Ltd.",
            "Om Sai Mangalam Murti Developer Pvt. Ltd.", "Omkar Construction",
            "Opera Dreams", "Pacitic Construction, Tata", "Panchwati Builder",
            "Park Sarvamangla Projects Pvt. Ltd.", "Pashupati Builder Pvt. Ltd.",
            "Peninsula Construction", "Prahlad Builder", "Prasad Construction Pvt. Ltd.",
            "Pratap Construction", "Pratibha Enterprises", "Vardaan Builder",
            "Prayatna Trader", "R.A Construction", "R.S.Agarwal", "Rachit Developer",
            "Radiant Homes", "Raise Paradise Builder Pvt. Ltd.", "Rhea Enterprises",
            "Rishi Prakash Builder & Developer", "Rock View Construction",
            "S.B.Construction", "S.S.Enterprises", "Sai City",
            "Samridhi Creatives Pvt. Ltd.", "Sandhya Sourav Construction",
            "Sarang Engicon India Pvt. Ltd.", "Sarkar Construction",
            "Sarawagi Builder", "Sarvodaya Grih Nirman Pvt. Ltd.",
            "Satya Construction", "Sheetal Enclave", "Shelter",
            "Shirdi Sai Construction", "Shivalik Construction",
            "Shree Balajee Enterprises", "Shree Durga Construction",
            "Shree Krishna Construction", "Shree Shiv Shakti Developer",
            "Singh & Sons", "Suntec Builders", "Suraj Appartment",
            "Swastik Hi Tech Builder", "Tanavi Construction", "Tapovan Apartment",
            "Tirupati Apartment", "Trimurti Apartment",
            "Triveni Infrastructure Pvt Ltd", "Tulip Home", "Unitech Builder",
            "Urmila Enterprises", "Vaastu Construction",
            "Vaibhav Builder & Developer", "Vertical Enterprises",
            "Vinayaka Associates", "Yash Construction",
            "Yash Raj Builders & Promoters Pvt Ltd", "Yashlok Apartment",
            "Zak Infrastructure"
        ]
    },
    {
        category: "Infrastructure & Development",
        icon: Briefcase,
        description: "Infrastructure development and project management",
        items: [
            "Creative Developer", "Dream Ways Estate Pvt. Ltd.", "Elite Developer",
            "Enhance Project Pvt Ltd.", "Flyfot Buildcon Pvt. Ltd.",
            "Nalanda Developer", "Navayuga Engineering Company Ltd."
        ]
    },
    {
        category: "Healthcare & Education",
        icon: GraduationCap,
        description: "Healthcare facilities and educational institutions",
        items: [
            "Bihar Institute of Mining & Mine Surveying",
            "Narayani Nursing Home", "Raj Hospital",
            "Sac Hospital Management & Consultancy",
            "St. Arbindo Academy"
        ]
    },
    {
        category: "Industrial & Manufacturing",
        icon: Factory,
        description: "Manufacturing and industrial enterprises",
        items: [
            "Bokaro Iron Store", "Chotanagpur Graphite Industries",
            "Divine Alloys & Power Co. Ltd.", "Prasad Explosive & Chemical"
        ]
    }
];
