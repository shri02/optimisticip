var trademarkEntityTypeVar = document.getElementById("trademarkEntityType");
var namePrivateLimitedVar = document.getElementById("nameOfPrivateLimitedBlock");
var nameOfLLPVisibleVar = document.getElementById("nameOfLLPBlock");
var nameOfPartnershipFirmVar = document.getElementById("nameOfPartnershipFirmBlock");
var nameOfThePartnersVar = document.getElementById("nameOfThePartnersBlock");
var nameOfOPCVar = document.getElementById("nameOfOPCBlock");
var nameOfProprietorVar = document.getElementById("nameOfProprietorBlock");
var authorizationLogoDeviceVar = document.getElementById("authorizationLogoDeviceBlock");
var trademarkUseStatusDateOfUseVar = document.getElementById("trademarkUseStatusDateOfUseBlock");

// Trademark Entity Type

function trademarkEntityTypeVisible() {
    if(trademarkEntityTypeVar.classList.contains('visible'))
    {
        //Do Nothing
        trademarkEntityTypeVar.classList.remove("notvisible");
    }
    else
    {
        trademarkEntityTypeVar.classList.remove("notvisible");
        trademarkEntityTypeVar.classList.add("visible");
    }
}


function trademarkEntityTypeNotVisible() {
    if(trademarkEntityTypeVar.classList.contains('notvisible'))
    {
        //Do Nothing
        trademarkEntityTypeVar.classList.remove("visible");
    }
    else
    {
        trademarkEntityTypeVar.classList.remove("visible");
        trademarkEntityTypeVar.classList.add("notvisible");
    }
}

// Trademark Entity Name

function nameOfPrivateLimitedVisible() 
{
    if(namePrivateLimitedVar.classList.contains('visible'))
    {
        //Do Nothing
        namePrivateLimitedVar.classList.remove("notvisible");
    }
    else
    {
        namePrivateLimitedVar.classList.remove("notvisible");
        namePrivateLimitedVar.classList.add("visible");
    }
}

function nameOfPrivateLimitedNotVisible() 
{
    if(namePrivateLimitedVar.classList.contains('notvisible'))
    {
        //Do Nothing
        namePrivateLimitedVar.classList.remove("visible");
    }
    else
    {
        namePrivateLimitedVar.classList.remove("visible");
        namePrivateLimitedVar.classList.add("notvisible");
    }
}

function nameOfLLPVisible() 
{
    if(nameOfLLPVisibleVar.classList.contains('visible'))
    {
        //Do Nothing
        nameOfLLPVisibleVar.classList.remove("notvisible");
    }
    else
    {
        nameOfLLPVisibleVar.classList.remove("notvisible");
        nameOfLLPVisibleVar.classList.add("visible");
    }
}

function nameOfLLPNotVisible() 
{
    if(nameOfLLPVisibleVar.classList.contains('notvisible'))
    {
        //Do Nothing
        nameOfLLPVisibleVar.classList.remove("visible");
    }
    else
    {
        nameOfLLPVisibleVar.classList.remove("visible");
        nameOfLLPVisibleVar.classList.add("notvisible");
    }
}

function nameOfPartnershipFirmVisible() 
{
    if(nameOfPartnershipFirmVar.classList.contains('visible'))
    {
        //Do Nothing
        nameOfPartnershipFirmVar.classList.remove("notvisible");
        nameOfThePartnersVar.classList.remove("notvisible");
    }
    else
    {
        nameOfPartnershipFirmVar.classList.remove("notvisible");
        nameOfThePartnersVar.classList.remove("notvisible");
        nameOfPartnershipFirmVar.classList.add("visible");
        nameOfThePartnersVar.classList.add("visible");
    }
}

function nameOfPartnershipFirmNotVisible() 
{
    if(nameOfPartnershipFirmVar.classList.contains('notvisible'))
    {
        //Do Nothing
        nameOfPartnershipFirmVar.classList.remove("visible");
        nameOfThePartnersVar.classList.remove("visible");
    }
    else
    {
        nameOfPartnershipFirmVar.classList.remove("visible");
        nameOfThePartnersVar.classList.remove("visible");
        nameOfPartnershipFirmVar.classList.add("notvisible");
        nameOfThePartnersVar.classList.add("notvisible");
    }
}

function nameOfOPCVisible() 
{
    if(nameOfOPCVar.classList.contains('visible'))
    {
        //Do Nothing
        nameOfOPCVar.classList.remove("notvisible");
    }
    else
    {
        nameOfOPCVar.classList.remove("notvisible");
        nameOfOPCVar.classList.add("visible");
    }
}

function nameOfOPCNotVisible() 
{
    if(nameOfOPCVar.classList.contains('notvisible'))
    {
        //Do Nothing
        nameOfOPCVar.classList.remove("visible");
    }
    else
    {
        nameOfOPCVar.classList.remove("visible");
        nameOfOPCVar.classList.add("notvisible");
    }
}

function nameOfProprietorVisible() 
{
    if(nameOfProprietorVar.classList.contains('visible'))
    {
        //Do Nothing
        nameOfProprietorVar.classList.remove("notvisible");
    }
    else
    {
        nameOfProprietorVar.classList.remove("notvisible");
        nameOfProprietorVar.classList.add("visible");
    }
}

function nameOfProprietorNotVisible() 
{
    if(nameOfProprietorVar.classList.contains('notvisible'))
    {
        //Do Nothing
        nameOfProprietorVar.classList.remove("visible");
    }
    else
    {
        nameOfProprietorVar.classList.remove("visible");
        nameOfProprietorVar.classList.add("notvisible");
    }
}

// To Make LOGO/DEVICE Visible

function authorizationLogoDeviceVisible() 
{
    if(authorizationLogoDeviceVar.classList.contains('visible'))
    {
        //Do Nothing
        authorizationLogoDeviceVar.classList.remove("notvisible");
    }
    else
    {
        authorizationLogoDeviceVar.classList.remove("notvisible");
        authorizationLogoDeviceVar.classList.add("visible");
    }
}

function authorizationLogoDeviceNotVisible() 
{
    if(authorizationLogoDeviceVar.classList.contains('notvisible'))
    {
        //Do Nothing
        authorizationLogoDeviceVar.classList.remove("visible");
    }
    else
    {
        authorizationLogoDeviceVar.classList.remove("visible");
        authorizationLogoDeviceVar.classList.add("notvisible");
    }
}


// Trademark Use Status Date Of Use Block Visible

function trademarkUseStatusDateOfUseVisible() 
{
    if(trademarkUseStatusDateOfUseVar.classList.contains('visible'))
    {
        //Do Nothing
        trademarkUseStatusDateOfUseVar.classList.remove("notvisible");
    }
    else
    {
        trademarkUseStatusDateOfUseVar.classList.remove("notvisible");
        trademarkUseStatusDateOfUseVar.classList.add("visible");
    }
}

function trademarkUseStatusDateOfUseNotVisible() 
{
    if(trademarkUseStatusDateOfUseVar.classList.contains('notvisible'))
    {
        //Do Nothing
        trademarkUseStatusDateOfUseVar.classList.remove("visible");
    }
    else
    {
        trademarkUseStatusDateOfUseVar.classList.remove("visible");
        trademarkUseStatusDateOfUseVar.classList.add("notvisible");
    }
}