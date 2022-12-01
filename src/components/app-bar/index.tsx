import TestIcon from "../../icons/test";
import AppText from "./app-text";

export default function AppBar() {
  return (
    <nav class="bg-[#0000001F] w-16 h-screen py-2 ">
      <div class="flex flex-col  gap-2 pr-2">
        <div class="h-11 w-11 grid place-items-center rounded-xl self-end bg-[#0000001F]"></div>
        <AppText background="#0000000F" icon={<TestIcon />} />
      </div>
      <div class="flex justify-center my-1">
        <div class="w-11 h-px bg-[#00000014]"></div>
      </div>
      <ul class="flex flex-col gap-2 pr-2">
        <AppText background="#5CBFA7" text="C"  notifications={"1"}  />
        <AppText background="#EF5555" text="D"/>
        <AppText
          background="#000000E5"
          text="A"
          notifications={"3"}
          isActive={true}
        />
        <AppText background="#5CBFA7" text="B"  />

        <AppText background="#4EADF1" icon={<TestIcon />} />
        <AppText background="#4EADF1" icon={<TestIcon />}  notifications={"1"} />
        <AppText background="#4EADF1" icon={<TestIcon />} />
      </ul>
    </nav>
  );
}
