type MyUser = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

function createOrUpdateUser(_initialValues: Partial<User>) {
  // Оновлення користувача
}

createOrUpdateUser({
  email: "user@mail.com",
  password: "password123",
} as Partial<User>);
