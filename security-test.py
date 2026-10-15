Import sqlite3

def get_user(user_id):
    connection = sqlite3.connect("app.db")
    query = "SELECT * FROM users WHERE id = " + user_id
    return connection.execute(query).fetchall()
