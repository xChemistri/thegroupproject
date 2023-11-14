function flightselected (value)
{
    switch (value)
    {
        case "JetBlue":
            document.getElementById("carryOnSize").innerHTML = "22in x 14in x 9in";
            document.getElementById("personalItemSize").innerHTML = "17in x 13in x 8in";
            document.getElementById("maxWeight").innerHTML = "50lb";
            break;
        case "United":
            document.getElementById("carryOnSize").innerHTML = "22in x 14in x 9in";
            document.getElementById("personalItemSize").innerHTML = "17in x 10in x 9in";
            document.getElementById("maxWeight").innerHTML = "50lb";
            break;
        case "Delta":
            document.getElementById("carryOnSize").innerHTML = "22in x 14 x 9in";
            document.getElementById("personalItemSize").innerHTML = "17in x 13in x 9in";
            document.getElementById("maxWeight").innerHTML = "50lb";
            break;
        case "American":
            document.getElementById("carryOnSize").innerHTML = "22in x 14in x 9in";
            document.getElementById("personalItemSize").innerHTML = "18in x 14in x 8in";
            document.getElementById("maxWeight").innerHTML = "50lb";
            break;
        case "SouthWest":
            document.getElementById("carryOnSize").innerHTML = "22in x 16in x 10in";
            document.getElementById("personalItemSize").innerHTML = "18.5in x 8.5in x 13.5in";
            document.getElementById("maxWeight").innerHTML = "50lb";
            break;
        case "Emirates":
            document.getElementById("carryOnSize").innerHTML = "22in x 15in x 8in";
            document.getElementById("personalItemSize").innerHTML = "18in x 14in x 7in";
            document.getElementById("maxWeight").innerHTML = "15lb, 22lb (Premium)";
            break;
        case "Qatar":
            document.getElementById("carryOnSize").innerHTML = "20in x 15in x 10in";
            document.getElementById("personalItemSize").innerHTML = "Must Fit Under Seat*";
            document.getElementById("maxWeight").innerHTML = "50lb";
            break;
        case "Saudi":
            document.getElementById("carryOnSize").innerHTML = "<= 62 inch";
            document.getElementById("personalItemSize").innerHTML = "<= 15lb*";
            document.getElementById("maxWeight").innerHTML = "50lb";
            break;
        case "AirAsia":
            document.getElementById("carryOnSize").innerHTML = "22in x 14in x 9in";
            document.getElementById("personalItemSize").innerHTML = "15in x 11in x 4in";
            document.getElementById("maxWeight").innerHTML = "15kg (Domestic), 60kg*";
            break;
        case "AirChina":
            document.getElementById("carryOnSize").innerHTML = "21in x 15in x 7in";
            document.getElementById("personalItemSize").innerHTML = "Must Fit Under Seat*";
            document.getElementById("maxWeight").innerHTML = "70lb (Domestic), 110lb (International)";
            break;
        case "ANZG":
            document.getElementById("carryOnSize").innerHTML = "21in x 15in x 7in";
            document.getElementById("personalItemSize").innerHTML = "Must Fit Under Seat*";
            document.getElementById("maxWeight").innerHTML = "50lb (Domestic), 70lb (International)";
            break;
        case "ANA":
            document.getElementById("carryOnSize").innerHTML = "21in x 15in x 7in";
            document.getElementById("personalItemSize").innerHTML = "Must Fit Under Seat*";
            document.getElementById("maxWeight").innerHTML = "88lb (Domestic), 70lb (International)";
            break;
        case "Asiana":
            document.getElementById("carryOnSize").innerHTML = "21in x 15in x 7in";
            document.getElementById("personalItemSize").innerHTML = "Must Fit Under Seat";
            document.getElementById("maxWeight").innerHTML = "88lb (Domestic), 70lb (International)";
            break;
        case "Cathay":
            document.getElementById("carryOnSize").innerHTML = "21in x 15in x 7in";
            document.getElementById("personalItemSize").innerHTML = "Must Fit Under Seat";
            document.getElementById("maxWeight").innerHTML = "88lb (Domestic), 70lb (International)";
            break;
        case "Cebu":
            document.getElementById("carryOnSize").innerHTML = "21in x 15in x 7in";
            document.getElementById("personalItemSize").innerHTML = "Must Fit Under Seat";
            document.getElementById("maxWeight").innerHTML = "88lb (Domestic), 70lb (International)";
            break;
        case "ChinaAirlines":
            document.getElementById("carryOnSize").innerHTML = "21in x 15in x 7in";
            document.getElementById("personalItemSize").innerHTML = "Must Fit Under Seat";
            document.getElementById("maxWeight").innerHTML = "110lb (Domestic), 70lb (International)";
            break;
        case "CEA":
            document.getElementById("carryOnSize").innerHTML = "21in x 15in x 7in";
            document.getElementById("personalItemSize").innerHTML = "Must Fit Under Seat";
            document.getElementById("maxWeight").innerHTML = "44lb/88lb (Domestic), 50lb (International)";
            break;
        case "CSA":
            document.getElementById("carryOnSize").innerHTML = "21in x 15in x 7in";
            document.getElementById("personalItemSize").innerHTML = "Must Fit Under Seat";
            document.getElementById("maxWeight").innerHTML = "44lb/88lb (Domestic), 50lb (International)";
            break;
        case "Garuda":
            document.getElementById("carryOnSize").innerHTML = "21in x 15in x 7in";
            document.getElementById("personalItemSize").innerHTML = "Must Fit Under Seat";
            document.getElementById("maxWeight").innerHTML = "20kg (Domestic), 23kg (International)";
            break;
        case "Hainan":
            document.getElementById("carryOnSize").innerHTML = "21in x 15in x 7in";
            document.getElementById("personalItemSize").innerHTML = "Must Fit Under Seat";
            document.getElementById("maxWeight").innerHTML = "20kg (Domestic), 23kg (International)";
        case "JAL":
            document.getElementById("carryOnSize").innerHTML = "21in x 15in x 7in";
            document.getElementById("personalItemSize").innerHTML = "Must Fit Under Seat";
            document.getElementById("maxWeight").innerHTML = "20kg (Domestic), 23kg (International)";
            break;
        case "JetAirways":
            document.getElementById("carryOnSize").innerHTML = "21in x 15in x 7in";
            document.getElementById("personalItemSize").innerHTML = "Must Fit Under Seat";
            document.getElementById("maxWeight").innerHTML = "50lb (Domestic), 50lb/70lb (International)";
            break;
        case "Jetstar":
            document.getElementById("carryOnSize").innerHTML = "21in x 15in x 7in";
            document.getElementById("personalItemSize").innerHTML = "Must Fit Under Seat";
            document.getElementById("maxWeight").innerHTML = "40kg (Domestic), 23kg/32kg (International)";
            break;
        case "Kingfisher":
            document.getElementById("carryOnSize").innerHTML = "21in x 15in x 7in";
            document.getElementById("personalItemSize").innerHTML = "Must Fit Under Seat";
            document.getElementById("maxWeight").innerHTML = "20kg-40kg (Domestic), 23kg/32kg (International)";
        case "KoreanAir":
            document.getElementById("carryOnSize").innerHTML = "21in x 15in x 7in";
            document.getElementById("personalItemSize").innerHTML = "Must Fit Under Seat";
            document.getElementById("maxWeight").innerHTML = "110lb (Domestic), 70lb (International)";
            break;
        case "LionAir":
            document.getElementById("carryOnSize").innerHTML = "21in x 15in x 7in";
            document.getElementById("personalItemSize").innerHTML = "Must Fit Under Seat";
            document.getElementById("maxWeight").innerHTML = "15kg (Domestic), 23kg (International)";
            break;
        case "MalaysiaAirlines":
            document.getElementById("carryOnSize").innerHTML = "21in x 15in x 7in";
            document.getElementById("personalItemSize").innerHTML = "Must Fit Under Seat";
            document.getElementById("maxWeight").innerHTML = "30kg (Domestic), 23kg (International)";
            break;
        case "Qantas":
            document.getElementById("carryOnSize").innerHTML = "22in x 14in x 9in";
            document.getElementById("personalItemSize").innerHTML = "Must Fit Under Seat";
            document.getElementById("maxWeight").innerHTML = "<=40kg (Domestic), 50lb (International)";
            break;
        case "ShenzhenAirlines":
            document.getElementById("carryOnSize").innerHTML = "21in x 15in x 7in";
            document.getElementById("personalItemSize").innerHTML = "Must Fit Under Seat";
            document.getElementById("maxWeight").innerHTML = "15kg (Domestic), 23kg (International)";
            break;
        case "SingaporeAirlines":
            document.getElementById("carryOnSize").innerHTML = "21in x 15in x 7in";
            document.getElementById("personalItemSize").innerHTML = "Must Fit Under Seat";
            document.getElementById("maxWeight").innerHTML = "30kg (Domestic), 23kg (International)";
            break;
        case "TAI":
            document.getElementById("carryOnSize").innerHTML = "22in x 18in x 10in";
            document.getElementById("personalItemSize").innerHTML = "Must Fit Under Seat";
            document.getElementById("maxWeight").innerHTML = "88lb (Domestic), 23kg (International)";
            break;
        case "VietnamAirlines":
            document.getElementById("carryOnSize").innerHTML = "21in x 15in x 7in";
            document.getElementById("personalItemSize").innerHTML = "Must Fit Under Seat";
            document.getElementById("maxWeight").innerHTML = "88lb (Domestic), 70lb (International)";
            break;
        case "VirginBlue":
            document.getElementById("carryOnSize").innerHTML = "22in x 15in x 9in";
            document.getElementById("personalItemSize").innerHTML = "Must Fit Under Seat";
            document.getElementById("maxWeight").innerHTML = "23kg";
            break;
        case "Asiana":
            document.getElementById("carryOnSize").innerHTML = "21in x 15in x 7in";
            document.getElementById("personalItemSize").innerHTML = "Must Fit Under Seat";
            document.getElementById("maxWeight").innerHTML = "88lb (Domestic), 70lb (International)";
            break;
        case "Asiana":
            document.getElementById("carryOnSize").innerHTML = "21in x 15in x 7in";
            document.getElementById("personalItemSize").innerHTML = "Must Fit Under Seat";
            document.getElementById("maxWeight").innerHTML = "88lb (Domestic), 70lb (International)";
            break;
        case "Asiana":
            document.getElementById("carryOnSize").innerHTML = "21in x 15in x 7in";
            document.getElementById("personalItemSize").innerHTML = "Must Fit Under Seat";
            document.getElementById("maxWeight").innerHTML = "88lb (Domestic), 70lb (International)";
        case "Asiana":
            document.getElementById("carryOnSize").innerHTML = "21in x 15in x 7in";
            document.getElementById("personalItemSize").innerHTML = "Must Fit Under Seat";
            document.getElementById("maxWeight").innerHTML = "88lb (Domestic), 70lb (International)";
            break;
        case "Asiana":
            document.getElementById("carryOnSize").innerHTML = "21in x 15in x 7in";
            document.getElementById("personalItemSize").innerHTML = "Must Fit Under Seat";
            document.getElementById("maxWeight").innerHTML = "88lb (Domestic), 70lb (International)";
            break;
        case "Asiana":
            document.getElementById("carryOnSize").innerHTML = "21in x 15in x 7in";
            document.getElementById("personalItemSize").innerHTML = "Must Fit Under Seat";
            document.getElementById("maxWeight").innerHTML = "88lb (Domestic), 70lb (International)";
            break;
        case "Asiana":
            document.getElementById("carryOnSize").innerHTML = "21in x 15in x 7in";
            document.getElementById("personalItemSize").innerHTML = "Must Fit Under Seat";
            document.getElementById("maxWeight").innerHTML = "88lb (Domestic), 70lb (International)"';
            break;
        case "Asiana":
            document.getElementById("carryOnSize").innerHTML = "21in x 15in x 7in";
            document.getElementById("personalItemSize").innerHTML = "Must Fit Under Seat";
            document.getElementById("maxWeight").innerHTML = "88lb (Domestic), 70lb (International)";
            break;
        case "Asiana":
            document.getElementById("carryOnSize").innerHTML = "21in x 15in x 7in";
            document.getElementById("personalItemSize").innerHTML = "Must Fit Under Seat";
            document.getElementById("maxWeight").innerHTML = "88lb (Domestic), 70lb (International)";
            break;
        case "Asiana":
            document.getElementById("carryOnSize").innerHTML = "21in x 15in x 7in";
            document.getElementById("personalItemSize").innerHTML = "Must Fit Under Seat";
            document.getElementById("maxWeight").innerHTML = "88lb (Domestic), 70lb (International)";
            break;
        case "Asiana":
            document.getElementById("carryOnSize").innerHTML = "21in x 15in x 7in";
            document.getElementById("personalItemSize").innerHTML = "Must Fit Under Seat";
            document.getElementById("maxWeight").innerHTML = "88lb (Domestic), 70lb (International)";
        case "Asiana":
            document.getElementById("carryOnSize").innerHTML = "21in x 15in x 7in";
            document.getElementById("personalItemSize").innerHTML = "Must Fit Under Seat";
            document.getElementById("maxWeight").innerHTML = "88lb (Domestic), 70lb (International)";
            break;
        case "Asiana":
            document.getElementById("carryOnSize").innerHTML = "21in x 15in x 7in";
            document.getElementById("personalItemSize").innerHTML = "Must Fit Under Seat";
            document.getElementById("maxWeight").innerHTML = "88lb (Domestic), 70lb (International)";
            break;
        case "Asiana":
            document.getElementById("carryOnSize").innerHTML = "21in x 15in x 7in";
            document.getElementById("personalItemSize").innerHTML = "Must Fit Under Seat";
            document.getElementById("maxWeight").innerHTML = "88lb (Domestic), 70lb (International)";
            break;
        case "Asiana":
            document.getElementById("carryOnSize").innerHTML = "21in x 15in x 7in";
            document.getElementById("personalItemSize").innerHTML = "Must Fit Under Seat";
            document.getElementById("maxWeight").innerHTML = "88lb (Domestic), 70lb (International)";
            case "Asiana":
            document.getElementById("carryOnSize").innerHTML = "21in x 15in x 7in";
            document.getElementById("personalItemSize").innerHTML = "Must Fit Under Seat";
            document.getElementById("maxWeight").innerHTML = "88lb (Domestic), 70lb (International)";
            break;
        case "Asiana":
            document.getElementById("carryOnSize").innerHTML = "21in x 15in x 7in";
            document.getElementById("personalItemSize").innerHTML = "Must Fit Under Seat";
            document.getElementById("maxWeight").innerHTML = "88lb (Domestic), 70lb (International)";
            break;
        case "Asiana":
            document.getElementById("carryOnSize").innerHTML = "21in x 15in x 7in";
            document.getElementById("personalItemSize").innerHTML = "Must Fit Under Seat";
            document.getElementById("maxWeight").innerHTML = "88lb (Domestic), 70lb (International)";
            break;
        case "Asiana":
            document.getElementById("carryOnSize").innerHTML = "21in x 15in x 7in";
            document.getElementById("personalItemSize").innerHTML = "Must Fit Under Seat";
            document.getElementById("maxWeight").innerHTML = "88lb (Domestic), 70lb (International)"';
            break;
        case "Asiana":
            document.getElementById("carryOnSize").innerHTML = "21in x 15in x 7in";
            document.getElementById("personalItemSize").innerHTML = "Must Fit Under Seat";
            document.getElementById("maxWeight").innerHTML = "88lb (Domestic), 70lb (International)";
            break;
        case "Asiana":
            document.getElementById("carryOnSize").innerHTML = "21in x 15in x 7in";
            document.getElementById("personalItemSize").innerHTML = "Must Fit Under Seat";
            document.getElementById("maxWeight").innerHTML = "88lb (Domestic), 70lb (International)";
            break;
        case "Asiana":
            document.getElementById("carryOnSize").innerHTML = "21in x 15in x 7in";
            document.getElementById("personalItemSize").innerHTML = "Must Fit Under Seat";
            document.getElementById("maxWeight").innerHTML = "88lb (Domestic), 70lb (International)";
            break;
        case "Asiana":
            document.getElementById("carryOnSize").innerHTML = "21in x 15in x 7in";
            document.getElementById("personalItemSize").innerHTML = "Must Fit Under Seat";
            document.getElementById("maxWeight").innerHTML = "88lb (Domestic), 70lb (International)";
        case "Asiana":
            document.getElementById("carryOnSize").innerHTML = "21in x 15in x 7in";
            document.getElementById("personalItemSize").innerHTML = "Must Fit Under Seat";
            document.getElementById("maxWeight").innerHTML = "88lb (Domestic), 70lb (International)";
            break;
        case "Asiana":
            document.getElementById("carryOnSize").innerHTML = "21in x 15in x 7in";
            document.getElementById("personalItemSize").innerHTML = "Must Fit Under Seat";
            document.getElementById("maxWeight").innerHTML = "88lb (Domestic), 70lb (International)";
            break;
        case "Asiana":
            document.getElementById("carryOnSize").innerHTML = "21in x 15in x 7in";
            document.getElementById("personalItemSize").innerHTML = "Must Fit Under Seat";
            document.getElementById("maxWeight").innerHTML = "88lb (Domestic), 70lb (International)";
            break;
        case "Asiana":
            document.getElementById("carryOnSize").innerHTML = "21in x 15in x 7in";
            document.getElementById("personalItemSize").innerHTML = "Must Fit Under Seat";
            document.getElementById("maxWeight").innerHTML = "88lb (Domestic), 70lb (International)";
        default:
            document.getElementById("carryOnSize").innerHTML = "N/A";
            document.getElementById("personalItemSize").innerHTML = "N/A";
            document.getElementById("maxWeight").innerHTML = "N/A";
    }
}

// note to self:
// id = carryOnSize
// personalItemSize
// maxWeight