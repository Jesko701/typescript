type User = {
  name: string;
  email: string;
  isActive: boolean;
};
function createUser1(user: User): User {
    return { name: "", email: "", isActive: true }
}
createUser1({ name: "", email: "", isActive: true });
