jQuery("#authors li").each(function() {
var current = jQuery(this); 
var nam = current.find("strong").text();
var mySubString = nam.substring(
    nam.lastIndexOf("(") + 1, 
    nam.lastIndexOf(")")
);
var updatedString = mySubString.replace("@", "");
console.log(updatedString.toLowerCase());
current.find("input[type='text']").val(updatedString.toLowerCase());


});
