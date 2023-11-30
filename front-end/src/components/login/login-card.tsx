import {Card, CardBody} from "@nextui-org/react";
import {Input} from "@nextui-org/react";
import {Button} from "@nextui-org/react";

export default function LoginCard() {
    return (
        <Card>
            <form>
            <div>
                <Input
                isRequired
                type="email"
                label="Email"
                defaultValue="junior@nextui.org"
                className="max-w-xs"
                />
            </div>
            <div>
                <Input
                isRequired
                type="password"
                label="Password"
                defaultValue="Please enter your password"
                className="max-w-xs"
                />
            </div>
            <div>
                <Button isDisabled color="primary">
                Login
                </Button>
                <Button isDisabled color="primary">
                Register
                </Button>
            </div>
            </form>
        </Card>
    )
};