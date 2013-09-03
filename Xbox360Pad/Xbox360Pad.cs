using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using SharpDX;
using SharpDX.XInput;

namespace Xbox360Pad
{
    public sealed class Pad
    {

        private static Controller[] csPad = new Controller[4];
        private static int controllers = 0;

        public static int initControllers()
        {
            for (int i = 0; i < 4; i++)
            {
                csPad[i] = new Controller((UserIndex)i);
                if(csPad[i].IsConnected) controllers++;
            }
            return controllers;
        }

        public static bool[] isPressed(string button)
        {
            int[] bFlag = new int[4];
            GamepadButtonFlags[] flags = new GamepadButtonFlags[4];
            State[] csState = new State[4];
            bool[] pressed = new bool[4];
            for (int i = 0; i < controllers; i++)
            {
                if (csPad[i].IsConnected)
                {
                    switch (button)
                    {
                        case "A":
                            bFlag[i] = 0x1000;
                            break;
                        case "B":
                            bFlag[i] = 0x2000;
                            break;
                        case "X":
                            bFlag[i] = 0x4000;
                            break;
                        case "Y":
                            bFlag[i] = 0x8000;
                            break;
                        case "DPadUp":
                            bFlag[i] = 0x1;
                            break;
                        case "DPadDown":
                            bFlag[i] = 0x2;
                            break;
                        case "DPadLeft":
                            bFlag[i] = 0x4;
                            break;
                        case "DPadRight":
                            bFlag[i] = 0x8;
                            break;
                        case "Start":
                            bFlag[i] = 0x10;
                            break;
                        case "Back":
                            bFlag[i] = 0x20;
                            break;
                        case "LeftClick":
                            bFlag[i] = 0x40;
                            break;
                        case "RightClick":
                            bFlag[i] = 0x80;
                            break;
                        case "LeftBumper":
                            bFlag[i] = 0x100;
                            break;
                        case "RightBumper":
                            bFlag[i] = 0x200;
                            break;
                    }
                    csState[i] = csPad[i].GetState();
                    flags[i] = csState[i].Gamepad.Buttons;
                    if (((int)flags[i] & bFlag[i]) >= 1)
                        pressed[i] = true;
                    else pressed[i] = false;
                }
            }
            return pressed;
        }

        public static byte[] getLeftTrigger()
        {
            State[] csState = new State[4];
            byte[] triggerState = new byte[4];
            for (int i = 0; i < controllers; i++)
            {
                csState[i] = csPad[i].GetState();
                triggerState[i] = csState[i].Gamepad.LeftTrigger;
            }
            return triggerState;
        }

        public static byte[] getRightTrigger()
        {
            State[] csState = new State[4];
            byte[] triggerState = new byte[4];
            for (int i = 0; i < controllers; i++)
            {
                csState[i] = csPad[i].GetState();
                triggerState[i] = csState[i].Gamepad.RightTrigger;
            }
            return triggerState;
        }

        public static short[] getLStickX()
        {
            State[] csState = new State[4];
            short[] LXState = new short[4];
            for (int i = 0; i < controllers; i++)
            {
                csState[i] = csPad[i].GetState();
                LXState[i] = csState[i].Gamepad.LeftThumbX;
            }
            return LXState;
        }

        public static short[] getLStickY()
        {
            State[] csState = new State[4];
            short[] LYState = new short[4];
            for (int i = 0; i < controllers; i++)
            {
                csState[i] = csPad[i].GetState();
                LYState[i] = csState[i].Gamepad.LeftThumbY;
            }
            return LYState;
        }

        public static short[] getRStickX()
        {
            State[] csState = new State[4];
            short[] RXState = new short[4];
            for (int i = 0; i < controllers; i++)
            {
                csState[i] = csPad[i].GetState();
                RXState[i] = csState[i].Gamepad.RightThumbX;
            }
            return RXState;
        }

        public static short[] getRStickY()
        {
            State[] csState = new State[4];
            short[] RYState = new short[4];
            for (int i = 0; i < controllers; i++)
            {
                csState[i] = csPad[i].GetState();
                RYState[i] = csState[i].Gamepad.RightThumbY;
            }
            return RYState;
        }

        public static void setLeftVibrate(int index, ushort speed)
        {
            Vibration lVibe = new Vibration();
            lVibe.LeftMotorSpeed = speed;
            csPad[index].SetVibration(lVibe);
        }

        public static void setRightVibrate(int index, ushort speed)
        {
            Vibration rVibe = new Vibration();
            rVibe.RightMotorSpeed = speed;
            csPad[index].SetVibration(rVibe);
        }

    }
}