import { execSync } from "child_process";

const port = process.argv[2] ?? "3001";

if (process.platform === "win32") {
  try {
    const output = execSync(`netstat -ano | findstr :${port}`, {
      encoding: "utf8",
    });
    const pids = new Set();

    for (const line of output.split("\n")) {
      if (!line.includes("LISTENING")) continue;
      const pid = line.trim().split(/\s+/).at(-1);
      if (pid && pid !== "0") pids.add(pid);
    }

    for (const pid of pids) {
      try {
        execSync(`taskkill /PID ${pid} /F`, { stdio: "ignore" });
        console.log(`Port ${port}: stopped process ${pid}`);
      } catch {
        // already exited
      }
    }
  } catch {
    // port is free
  }
} else {
  try {
    execSync(`lsof -ti:${port} | xargs kill -9`, { stdio: "ignore" });
  } catch {
    // port is free
  }
}
