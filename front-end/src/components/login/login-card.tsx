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
                className="min-w-xs pt-3"
                />
            </div>
            <div>
                <Input
                isRequired
                type="password"
                label="Password"
                className="min-w-xs py-3"
                />
            </div>
            <div className="flex gap-4 items-center">
                <Button className="bg-black text-white">
                    Login
                </Button>
                <Button className="bg-black text-white">
                    Register
                </Button>
            </div>
        </form>
    )
};