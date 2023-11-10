function flightselected (value)
{
    switch (value)
    {
        case "JetBlue":
            document.getElementById("carryOnSize").innerHTML = "N/A";
            document.getElementById("personalItemSize").innerHTML = "N/A";
            document.getElementById("maxWeight").innerHTML = "N/A";
            break;
        case "United":
            document.getElementById("carryOnSize").innerHTML = "N/A";
            document.getElementById("personalItemSize").innerHTML = "N/A";
            document.getElementById("maxWeight").innerHTML = "N/A";
            break;
        case "Delta":
            document.getElementById("carryOnSize").innerHTML = "N/A";
            document.getElementById("personalItemSize").innerHTML = "N/A";
            document.getElementById("maxWeight").innerHTML = "N/A";
            break;
        case "American":
            document.getElementById("carryOnSize").innerHTML = "N/A";
            document.getElementById("personalItemSize").innerHTML = "N/A";
            document.getElementById("maxWeight").innerHTML = "N/A";
            break;
        case "SouthWest":
            document.getElementById("carryOnSize").innerHTML = "N/A";
            document.getElementById("personalItemSize").innerHTML = "N/A";
            document.getElementById("maxWeight").innerHTML = "N/A";
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