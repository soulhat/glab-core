var app = require(“express”)();

// 加入验证器
app.use(“/user”,require(“./validat”));

// 加入路由
app.use(“/user”,require(“./router/user”));
