import { ReactElement } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import styles from "./cart.module.scss";
import {
  Badge,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  Tooltip,
  useDisclosure,
} from "@heroui/react";

export default function Cart(): ReactElement {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <>
      <div className={styles.cart__icon} onClick={onOpen}>
        <Badge color="danger" placement="bottom-right" content="5">
          <Tooltip
            content="Корзина"
            showArrow={true}
            placement="bottom"
            color="danger"
          >
            <FontAwesomeIcon icon={faCartShopping} />
          </Tooltip>
        </Badge>
      </div>
      <Drawer size="3xl" isOpen={isOpen} onOpenChange={onOpenChange}>
        <DrawerContent>
          {(onClose) => (
            <>
              <DrawerHeader className="flex flex-col gap-1">
                Корзина
              </DrawerHeader>
              <DrawerBody>Пусто :(</DrawerBody>
              <DrawerFooter>
                <Button color="primary" onPress={onClose}>
                  Очистить
                </Button>
                <Button color="danger" variant="light" onPress={onClose}>
                  Отмена
                </Button>
              </DrawerFooter>
            </>
          )}
        </DrawerContent>
      </Drawer>
    </>
  );
}
