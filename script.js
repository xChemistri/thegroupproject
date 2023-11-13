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