insert into users (first_name, last_name, email, password, username)
values (${firstName}, ${lastName}, ${email}, ${hash}, ${username})
returning *