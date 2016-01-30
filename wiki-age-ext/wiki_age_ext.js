var bday = $('span.bday').html();
var bdayDate = new Date(bday);
var dob = bdayDate.getFullYear();

var body = $('body').html();

function replacer(match) {
	var ageDiff = match-dob;
	if (ageDiff<=0){
		return match;
	}
  return match+' <span style="color:#999" title="Added by Wiki age extension">[age '+(match-dob)+']</span>';
}

//body = body.replace(/(18[0-9][0-9])|(19[0-9][0-9])|(20[0-9][0-9])/g, replacer);
body = body.replace(/([1-2][089][0-9][0-9])/g, replacer);

$('body').html(body);