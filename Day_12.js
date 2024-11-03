function fun_one(arg1, arg2, arg3) {
    console.log(arg1, arg2, arg3);
}
fun_one(); //undefined undefined undefined
fun_one("Hello_1"); //Hello_1 undefined undefined
fun_one(undefined, undefined, "Hello_3"); //undefined undefined Hello_3
