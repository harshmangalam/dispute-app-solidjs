import { JSX, Show } from "solid-js";

interface Props {
  isActive?: boolean;
  text?: string;
  background: string;
  icon?: JSX.Element;
  notifications?: string;
}
export default function AppText(props: Props) {
  return (
    <li class="flex items-center gap-1.5 group relative">
      {/* app indicator bar  */}
      <div
        class="w-1 h-4  group-hover:bg-black/90 rounded-tr-xl rounded-br-xl"
        classList={{ "h-8 bg-black/90": props.isActive }}
      ></div>
      {/* app text  */}
      <a
        href="#"
        class="h-11 w-11 text-[15px] leading-[18px] font-semibold grid place-items-center text-white  rounded-full group-hover:rounded-xl"
        classList={{ "rounded-xl": props.isActive }}
        style={{
          background: props.background,
        }}
      >
        {props.text || props.icon}
      </a>

      <Show when={props.notifications}>
        <div
          class="absolute bottom-0 right-0 min-w-[16px] h-4 text-white  rounded-full text-[11px] leading-4 font-semibold grid place-items-center outline outline-2 outline-[#EBEBEB] bg-[#EF5555]"
          classList={{
            "px-1 -bottom-1 -right-1": Boolean(
              props.notifications && props.notifications.length > 0
            ),
          }}
        >
          {props.notifications}
        </div>
      </Show>
    </li>
  );
}
