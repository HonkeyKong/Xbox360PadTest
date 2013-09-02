using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using SharpDX.XInput;

namespace Xbox360Pad
{
    public sealed class Pad
    {

        //public Controller csPad = new Controller(0);

        public static bool isControllerConnected(int index)
        {
            Controller csPad = new Controller((UserIndex)index);
            return csPad.IsConnected;
        }

        public static bool isPressed(int index, string button)
        {
            Controller csPad = new Controller((UserIndex)index);
            int bFlag = 0;
            if (csPad.IsConnected)
            {
                switch (button)
                {
                    case "A":
                        bFlag = 0x1000;
                        break;
                    case "B":
                        bFlag = 0x2000;
                        break;
                    case "X":
                        bFlag = 0x4000;
                        break;
                    case "Y":
                        bFlag = 0x8000;
                        break;
                    case "DPadUp":
                        bFlag = 0x1;
                        break;
                    case "DPadDown":
                        bFlag = 0x2;
                        break;
                    case "DPadLeft":
                        bFlag = 0x4;
                        break;
                    case "DPadRight":
                        bFlag = 0x8;
                        break;
                    case "Start":
                        bFlag = 0x10;
                        break;
                    case "Back":
                        bFlag = 0x20;
                        break;
                    case "LeftClick":
                        bFlag = 0x40;
                        break;
                    case "RightClick":
                        bFlag = 0x80;
                        break;
                    case "LeftBumper":
                        bFlag = 0x100;
                        break;
                    case "RightBumper":
                        bFlag = 0x200;
                        break;
                }
                State csState = csPad.GetState();
                GamepadButtonFlags flags = csState.Gamepad.Buttons;
                if (((int)flags & bFlag) >= 1)
                    return true;
                else return false;
            }
            else return false;
        }

        public static byte getLeftTrigger(int index)
        {
            Controller csPad = new Controller((UserIndex)index);
            State csState = csPad.GetState();
            return csState.Gamepad.LeftTrigger;
        }

        public static byte getRightTrigger(int index)
        {
            Controller csPad = new Controller((UserIndex)index);
            State csState = csPad.GetState();
            return csState.Gamepad.RightTrigger;
        }

        public static short getLStickX(int index)
        {
            Controller csPad = new Controller((UserIndex)index);
            State csState = csPad.GetState();
            return csState.Gamepad.LeftThumbX;
        }

        public static short getLStickY(int index)
        {
            Controller csPad = new Controller((UserIndex)index);
            State csState = csPad.GetState();
            return csState.Gamepad.LeftThumbY;
        }

        public static short getRStickX(int index)
        {
            Controller csPad = new Controller((UserIndex)index);
            State csState = csPad.GetState();
            return csState.Gamepad.RightThumbX;
        }

        public static short getRStickY(int index)
        {
            Controller csPad = new Controller((UserIndex)index);
            State csState = csPad.GetState();
            return csState.Gamepad.RightThumbY;
        }

    }
}