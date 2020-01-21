function validate()
{
	var name=document.myform.name.value;
	var email=document.myform.email.value;
	var Password=document.myform.Password.value;
	var phone=document.myform.phone.value;
	if(name==null || name=="")
	{
		alert('enter name first and try !!');
		return false;
	}
	else if(email==null || email=="")
	{
		alert('enter Email first and try !!');
		return false;
	}
	else if(Password==null || Password=="")
	{
		alert('enter Password first and try !!');
		return false;
	}
	else if(phone==null || phone=="")
	{
		alert('enter Mobile number first and try !!');
		return false;
	}

}