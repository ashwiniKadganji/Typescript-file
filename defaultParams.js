function DefaultParams(id, name, role) {
    if (role === void 0) { role = 'guest user'; }
    console.log('id', id);
    console.log('name', name);
    console.log('role', role);
}
DefaultParams(1, 'ashu');
DefaultParams(2, 'Renu', 'Software Developer');
