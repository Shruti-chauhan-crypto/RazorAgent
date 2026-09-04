import json
import uuid
from passlib.context import CryptContext

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

USER_FILE = "app/database/users.json"


def read_users():
    try:
        with open(USER_FILE, "r", encoding="utf-8") as file:
            return json.load(file)
    except FileNotFoundError:
        return []


def write_users(users):
    with open(USER_FILE, "w", encoding="utf-8") as file:
        json.dump(users, file, indent=2)


def hash_password(password):
    return pwd_context.hash(password)


def verify_password(password, hashed_password):
    return pwd_context.verify(password, hashed_password)


def register_user(name, email, password):
    users = read_users()

    if any(user["email"] == email for user in users):
        return None

    new_user = {
        "id": str(uuid.uuid4()),
        "name": name,
        "email": email,
        "password": hash_password(password),
    }

    users.append(new_user)
    write_users(users)

    return new_user


def authenticate_user(email, password):
    users = read_users()

    for user in users:
        if user["email"] == email:
            if verify_password(password, user["password"]):
                return user

    return None