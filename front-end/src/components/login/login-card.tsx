import {Card, CardBody} from "@nextui-org/react";
import {Input} from "@nextui-org/react";
import {Button} from "@nextui-org/react";

export default function LoginCard() {
    return (
        <form>
            <div>
                <h1 className="text-4xl py-5 text-white">ZephyrRTC</h1>
            </div>
            <div>
                <Input
                isRequired
                type="email"
                label="Email"
                defaultValue="junior@nextui.org"
                className="min-w-xs"
                />
            </div>
            <div>
                <Input
                isRequired
                type="password"
                label="Password"
                defaultValue="Please enter your password"
                className="min-w-xs"
                />
            </div>
            <div>
                <Button isDisabled className="bg-black text-white pr-5">
                    Login
                </Button>
                <Button isDisabled className="bg-black text-white">
                    Register
                </Button>
            </div>
        </form>
    )
};