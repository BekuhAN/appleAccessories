import { ReactElement } from "react";
import styles from "./wishlist.module.scss";
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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export default function Wishlist(): ReactElement {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <>
      <div className={styles.wishlist__icon} onClick={onOpen}>
        <Badge color="danger" placement="bottom-right" content="5">
          <Tooltip content="Избранное" showArrow={true} placement="bottom" color="danger">
            <FontAwesomeIcon icon={faHeart} />
          </Tooltip>
        </Badge>
      </div>
      <Drawer size="2xl" isOpen={isOpen} onOpenChange={onOpenChange}>
        <DrawerContent>
          {(onClose) => (
            <>
              <DrawerHeader className="flex flex-col gap-1">
                Избранное
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
